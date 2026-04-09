const posts = [
    { 
        id: "1", 
        title: "HTML & CSS 심화 과제",
        content: "이것은 HTML & CSS 내용입니다.",
        tags: ["HTML", "CSS"] 
    },
    { 
        id: "2", 
        title: "React & Hook 정리",
        content: "React & Hook 내용입니다.",
        tags: ["React", "Hook"]
    }
];

const PostArticle = ({ id }) => {
    const post = posts.find((p) => p.id === id);
    return (
        <div className="flex flex-col items-start p-[30px] gap-5 rounded-lg bg-white w-[751px]">
            <div className="flex items-center gap-3"> 
                <img src="/images/profile.png" className="w-[45px] h-[45px] rounded-full aspect-square object-cover"/>

                <div className="flex flex-col">
                    <span className="text-black text-center text-base font-semibold leading-5">likelion2026</span>
                    <span className="self-stretch text-gray-2 text-xs font-medium leading-4">2026.MM.DD</span>
                </div>
            </div>
    
            <article className="flex flex-col self-stretch">
                <h1 className="self-stretch text-black text-[32px] font-semibold leading-10 mb-4">{post?.title}</h1>
            
                <ul className="flex gap-2 mb-[30px]"> 
                    {post.tags.map((tag, index) => (
                        <li key={index} className="flex items-center px-3 py-2 gap-1 rounded bg-main-2 text-main-1 text-sm">
                            #{tag}
                        </li>
                    ))}
                </ul>
            
                <p className="self-stretch text-gray-1 text-base font-normal leading-5 mb-[30px]">{post.content}</p>

                <img src="/images/photo.png" alt="게시글 사진" className="w-full aspect-square rounded-lg border-[0.5px] border-gray-2 object-cover mb-11" />
            </article>

            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    <img src="/icons/like.svg" className="w-5 h-5 aspect-square"/>
                    <span className="text-gray-2 text-center text-base font-normal leading-5">0</span>
                </div>

                <div className="flex items-center gap-1">
                    <img src="/icons/comment.svg" className="w-5 h-5 aspect-square"/>
                    <span className="text-gray-2 text-center text-base font-normal leading-5">0</span>
                </div>
            </div>
        </div>
    );
};

export default PostArticle;