const MyContainer = ({ children }) => {
    return (
        <div className="bg-white my-5">
            <div className="my-container py-10">
                {children}
            </div>
        </div>
    );
};

export default MyContainer;