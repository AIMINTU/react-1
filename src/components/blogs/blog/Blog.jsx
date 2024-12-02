import { FaBeer, FaBookmark } from "react-icons/fa";

const Blog = ({ blog,handleclick,handleMin }) => {
    const { coverImg, author_img, author_name, date, headline,tags,reading_time } = blog
    return (
        <div className="border-2 rounded-lg mb-10 p-5">
            <div className="">
                <img style={{ height: '300px' }} className="w-[100%] rounded-lg" src={coverImg} alt="" />
            </div>
            <div className="p-5">
                <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                        <img src={author_img} alt="" />
                        <div>
                            <p>Name:{author_name}</p>
                            <p>Date:{date}</p>
                        </div>
                    </div>
                    <div>
                        <button className="text-red-600 text-2xl" onClick={()=>handleclick(blog)}><FaBookmark></FaBookmark></button>
                        <p>Reading-time:{reading_time}</p>
                    </div>


                </div>
                <h1 className="text-3xl font-semibold">Headline:{headline}</h1>
                {/* <div>
                    {
                        hash_tag.map((tags, index) => <div key={index}><span className=""><a href="">{tags}</a></span></div>)
                    }
                </div> */}
                <div>
                    <button className="text-blue-500" onClick={()=>handleMin(reading_time)}>Mark as read</button>
                </div>
            </div>
        </div>
    );

};

export default Blog;