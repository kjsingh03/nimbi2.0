import React from 'react';

function ComingSoon({ setComingSoon, topHeight, comingSoon }) {
    console.log(topHeight)
    return (
        <div className={`z-[10000] w-[100%] font-roboto text-[24px] uppercase h-screen flex justify-center items-center bg-[rgb(0,0,0,0.4)]`} style={{ top: 0, position: "sticky" }} onClick={() => setComingSoon("")}>
            <div className="h-[200px] max-w-[400px] w-full bg-[#242D32] relative z-[100]" onClick={(e) => { e.stopPropagation() }}>
                <div className="h-12 border-b-[1px] items-center justify-end flex py-2 px-4">
                    <svg onClick={() => setComingSoon("")} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14" fill="none">
                        <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white" />
                    </svg>
                </div>
                <div className="flex justify-center items-center h-[150px]">COMING SOON</div>
            </div>
        </div>
    );
}

export default ComingSoon;