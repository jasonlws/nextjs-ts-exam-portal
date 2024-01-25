export default function Question() {
    return (
        <>
            <div className="flex flex-col h-screen overflow-hidden">
                {/* Header */}
                <header className="flex flex-row justify-between w-full text-center border-b border-grey p-4">
                    <div className="">Name</div>
                    <div className="">Time Remaining: 00:00</div>
                </header>
                {/* Main */}
                <main className="flex flex-col justify-center h-screen bg-zinc-300">
                    {/* Tool */}
                    <div className="flex flex-row justify-between w-full p-4 bg-zinc-200 md:space-y-0 md:space-x-4 md:flex-row ">
                        <div>Calculator</div>
                        <div>Flag for Review</div>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col p-4 h-full">
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatum quo eveniet consectetur quas harum
                            vel sapiente, labore nemo reprehenderit maiores odit
                            quaerat enim adipisci voluptate cupiditate facilis
                            consequuntur optio quos?
                        </div>
                        <div>
                            <p className="">Answer 1</p>
                            <p className="">Answer 2</p>
                            <p className="">Answer 3</p>
                            <p className="">Answer 4</p>
                            <p className="">Answer 5</p>
                        </div>
                    </div>
                </main>
                {/* Footer */}
                <footer className="flex flex-row w-full justify-end border-t border-gery p-0">
                    <button className="flex-none trasition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700  w-64 hover:border-t-8 hover:border-b-0 hover:bg-blue-700 hover:border-t-blue-700 hover:shadow-lg">
                        <div className="px-8 py-4 duration-150 bg-blue-500 group-hover:bg-blue-700">
                            Previous
                        </div>
                    </button>
                    <button className="flex-none trasition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 w-64 hover:border-t-8 hover:border-b-0 hover:bg-blue-700 hover:border-t-blue-700 hover:shadow-lg">
                        <div className="px-8 py-4 duration-150 bg-blue-500 group-hover:bg-blue-700">
                            Next
                        </div>
                    </button>
                </footer>
            </div>
        </>
    );
}
