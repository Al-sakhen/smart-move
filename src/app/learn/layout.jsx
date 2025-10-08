const layout = ({ children }) => {
    return (
        <>
            <section className="flex gap-5">
                <aside className="mw-90px p-5 border-r border-gray-300">
                    <h2>Learning Layout</h2>
                </aside>
                <main className="w-3/4">{children}</main>
            </section>
        </>
    );
};

export default layout;
