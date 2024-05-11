const BackgroundImageText = ({ title, text, imageUrl }: { title: string; text?: string; imageUrl: string }) => {
    return (
        <div
            className="relative text-center text-white py-24 bg-cover bg-center"
            style={{ backgroundImage: `url('${imageUrl}')` }}
        >
            <div className="p-4">
                <h1 className="text-4xl font-bold mb-4">{title}</h1>
                <p className="text-xl">{text}</p>
            </div>
        </div>
    );
};

export default BackgroundImageText;
