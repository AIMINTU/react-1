import Bookmark from "./bookmark/bookmark";


const Bookmarks = ({ values,reading }) => {
    console.log(values)
    return (
        <div className="md:mt-7 w-1/3 bg-gray-200 rounded-lg">
            <div className="mt-8 bg-gray-900 text-white mx-5 p-3 rounded-xl">
                <h1>Total time you have read:{reading}</h1>
            </div>
            
            <div >

                <h1 className="font-bold text-3xl text-center my-5">Bookmarks</h1>
                <div>
                    {
                        values.map(value => <Bookmark key={value.unique_id} value={value}></Bookmark>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Bookmarks;