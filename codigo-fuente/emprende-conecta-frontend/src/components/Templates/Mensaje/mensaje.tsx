import React, { useState, FormEvent } from "react";

interface Message {
    id: number;
    text: string;
}

const ChatTemplate: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [currentMessage, setCurrentMessage] = useState("");

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentMessage(e.target.value);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!currentMessage.trim()) return;
        const newMessage: Message = {
            id: messages.length + 1,
            text: currentMessage,
        };
        setMessages([...messages, newMessage]);
        setCurrentMessage("");
    };

    return (
        <div className='flex flex-col h-screen bg-[#134B6A] justify-between flex-1'>
            <div className='overflow-y-auto p-4'>
                <p className=' text-center text-[#C4C4C4] bg-black bg-opacity-50 w-20 h-8 mx-auto font-medium text-xl'>
                    Hoy
                </p>
                <ul className='flex-1 flex flex-col text-[#0B3954] gap-4'>
                    <li className='bg-[#E0FF4F] rounded-tl-2xl rounded-e-2xl ml-0 mr-auto text-left max-w-xs p-3'>
                        <p className='font-medium'>
                            ¡Bienvenido a Klyn! Bienvenido a Klyn! Bienvenido a Klyn!
                            Bienvenido a Klyn! Bienvenido a Klyn! Bienvenido a Klyn!😊
                        </p>
                        <h4 className='text-end font-medium text-xs mt-1'>12:04pm</h4>
                    </li>
                    <li className='bg-[#BDD6E8] rounded-tr-2xl rounded-s-2xl ml-auto mr-0  max-w-xs p-3'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-14 h-14 rounded-2xl overflow-hidden '>
                                <img
                                    src='https://falabella.scene7.com/is/image/FalabellaPE/gsc_125437823_4308770_1?wid=800&hei=800&qlt=70'
                                    alt=''
                                />
                            </div>
                            <p className='text-center font-bold'>AIR FORCE ONE SHADOW</p>
                        </div>
                        <p className='font-medium'>
                            Hola! ¿Quisiera saber más sobre este producto?😊
                        </p>
                        <h4 className='text-end font-medium text-xs mt-1'>12:04pm</h4>
                    </li>
                    {messages.map((message) => (
                        <li
                            key={message.id}
                            className='bg-[#BDD6E8] rounded-tr-2xl rounded-s-2xl ml-auto mr-0  max-w-xs p-3'
                        >
                            <p className='font-medium'>{message.text}</p>
                            <h4 className='text-end font-medium text-xs mt-1'>12:04pm</h4>
                        </li>
                    ))}
                </ul>
            </div>

            <form onSubmit={handleSubmit} className='flex'>
                <input
                    type='text'
                    value={currentMessage}
                    onChange={handleMessageChange}
                    className='flex-1 rounded-md p-2  bg-[#0B3954]'
                    placeholder='Escribe un mensaje...'
                />
            </form>
        </div>
    );
};

export default ChatTemplate;
