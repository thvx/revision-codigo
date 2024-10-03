import Button2 from "../../Actions/button2/button2";

interface CategoryAvatarProps {
    title?: string;
    imgSrc?: string;
}

const CategoryAvatar = ({ imgSrc, title }: CategoryAvatarProps) => {
    return (
        <div className="flex flex-col gap-3 h-full items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden">
                <img className="w-full h-full  object-cover" src={imgSrc}></img>
            </div>
            <div>
                <Button2
                    variant="darkblue"
                    styles="rounded-lg"
                    type="button"
                    text={title}
                />
            </div>
        </div>
    );
};

export default CategoryAvatar;
