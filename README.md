
## Violaciones Corregidas
De acuerdo al [reporte realizado por Sonarqube](reporte-sonarqube.md), se identificaron los principales módulos que contenían violaciones de código de relevancia. A continuación, se detallan las correcciones realizadas en cada uno de ellos.

### 1. Refactorización de funciones anidadas en [`dashboard.tsx`](codigo-fuente/emprende-conecta-frontend/src/components/Templates/Dashboard/dashboard.tsx)
- **Violación**: Anidamiento profundo de funciones en el hook `useEffect`.
- **Corrección**: Se extrajo la lógica de filtrado en funciones externas, mejorando la legibilidad y reduciendo la complejidad.
  
**Antes**:
```typescript
useEffect(() => {
  const fetchData = async () => {
    const filteredResults = tableResults.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredTableResults(filteredResults);
    const filteredCards = cardsData.filter(card => card.title.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredResultsCards(filteredCards);
  };
  fetchData();
}, [searchQuery, tableResults, cardsData]);
```
**Después**:
```typescript
const filterTableResults = (results, query) => {
  return results.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
};

const filterCardResults = (cards, query) => {
  return cards.filter(card => card.title.toLowerCase().includes(query.toLowerCase()));
};

useEffect(() => {
  setFilteredTableResults(filterTableResults(tableResults, searchQuery));
  setFilteredResultsCards(filterCardResults(cardsData, searchQuery));
}, [searchQuery, tableResults, cardsData]);
```

### 2. Refactorización en [`HomeTemplate.tsx`](codigo-fuente/emprende-conecta-frontend/src/components/Templates/Homepage/HomeTemplate.tsx)
- **Violación**: Anidamiento profundo dentro del hook `useEffect` para construir `items`.
- **Corrección**: Se extrajo la lógica de mapeo de productos a una función externa para mejorar la separación de responsabilidades.

**Antes**:
```typescript
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await getProductsRequest();
      const BASE_URL = 'http://localhost:8000';
      const items = response.map((product) => ({
        image: `${BASE_URL}${product.image}`,
        title: product.name,
        price: `S/. ${product.price}`,
        badges: getProductTags(product.product_tags),
      }));
      setItems(items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);
```

**Después**:
```typescript
const mapProducts = (products) => {
  const BASE_URL = 'http://localhost:8000';
  return products.map((product) => ({
    image: `${BASE_URL}${product.image}`,
    title: product.name,
    price: `S/. ${product.price}`,
    badges: getProductTags(product.product_tags),
  }));
};

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await getProductsRequest();
      setItems(mapProducts(response));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);
```

### 3. Optimización de [`totalAmountContext.tsx`](codigo-fuente/emprende-conecta-frontend/src/app/Checkout/totalAmountContext.tsx)
- **Violación**: El objeto pasado al `Provider` cambia en cada renderizado.
- **Corrección**: Se usó `useMemo` para memorizar el valor del contexto y evitar renders innecesarios.

**Antes**:
```typescript
const value = { totalAmount, setTotalAmount };
```

**Después**:
```typescript
const value = React.useMemo(() => ({ totalAmount, setTotalAmount }), [totalAmount, setTotalAmount]);
```