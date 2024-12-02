

const Bookmark = ({value}) => {
    const {headline,tags}=value
    return (
        <div>
            
            <div className="bg-gray-600 mx-5 rounded-xl p-3 text-white mb-5">
                <h1>{headline}</h1>
                {
                    tags.map(tags=><a className="mr-4">{tags}</a>)
                }

            </div>
        </div>
    );
};

export default Bookmark;