import { useState, useEffect } from 'react';

import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import profile from "../../../../assets/img/girl.png"
import { toJalaali } from "jalaali-js";






export const CommentSection = () => {

    // comment date 
    const today = new Date();
    const { jm, jd } = toJalaali(today);
    const monthNames = [
        "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
    ];

    function convertToPersianNumbers(input) {
        var persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        return input.replace(/[0-9]/g, function (match) {
            return persianNumbers[parseInt(match)];
        });
    }

    // set comment
    const [inputValue, setInputValue] = useState('');
    const initialComment = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است. "
    const [comments, setComments] = useState(() => {
        const storedComments = localStorage.getItem('comments');
        return storedComments ? JSON.parse(storedComments) : [initialComment];
    });

    const addComment = () => {
        if (inputValue.trim() !== '') {
            const newComment = `${inputValue}`;
            const comment = newComment;
            setComments([...comments, comment]);
            setInputValue('');
        }
    };

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    // up on click 
    const [marginTop, setMarginTop] = useState("217px");
    const [isUp, setIsUp] = useState(false);
    const handleClick = () => {
        if (isUp) {
            setMarginTop("217px");
        } else {
            setMarginTop((prevMarginTop) => (parseInt(prevMarginTop) - 100) + "px");
        }
        setIsUp(!isUp);
    };

    return (
        <div className="relative">
            {/* comment input  */}
            <div className="bg-white border-2 border-gray-200 rounded-t-xl w-[659px] h-[157px] absolute top-0 left-0 flex justify-between transition-all duration-500 z-10" onClick={handleClick} style={{ marginTop, boxShadow: isUp ? '0 -4px 12px rgba(0, 0, 0, 0.25)' : '' }}>
                <MessageOutlinedIcon className="mt-[13px] ml-[36px] text-gray-400" />
                <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="کامنت"
                    className="mt-[13px] mr-[30px] text-right resize-none outline-none font-dana text-base text-black"
                />
                <div className='bg-white w-full h-[60px] absolute bottom-0 flex flex-row justify-between items-center gap-5 px-5'>

                    <button className='bg-teal-500 w-[78px] h-[31px] rounded-md flex flex-row justify-center items-center gap-1 py-[6px] px-3 ' onClick={addComment}>
                        <label className="font-dana font-semibold text-xs text-right text-white cursor-pointer">ثبت کامنت</label>
                    </button>
                    <div className='bg-white w-[156px] h-[24px] order-1 flex flex-row justify-end items-center p-0 gap-5 '>
                        <EmojiEmotionsOutlinedIcon className='text-gray-300' />
                        <InsertDriveFileOutlinedIcon className='text-gray-300' />
                        <AttachFileOutlinedIcon className='text-gray-300' />
                        <AlternateEmailOutlinedIcon className='text-gray-300' />
                    </div>

                </div>
            </div>

            {/* comment section */}
            <div className="bg-white mt-4 relative z-0 h-[208px] w-full flex flex-col overflow-y-auto snap-y scrollbar-hide">

                {/*comment */}
                {comments.map((comment, index) => (
                    <div key={index} className="bg-white snap-start mt-2 w-full h-[104px] flex flex-row justify-end items-start gap-3 px-5">
                        <img className="w-[35px] h-[34px] rounded-full flex items-start justify-end flex-none order-1" src={profile} />
                        <div className='bg-white w-[572px] h-[104px] flex flex-col items-end p-4 gap-2 border-1 border-solid border-gray-300 rounded-xl flex-grow flex-none'>
                            <div className='bg-white w-[528px] h-[25px] flex flex-row justify-between items-center'>
                                <div className='bg-white w-[105px] h-[25px] order-1 flex-grow-0 flex flex-row justify-end items-center p-0 gap-1'>
                                    <label className='text-teal-500 font-dana font-semibold text-base text-right order-1'>شما </label>
                                    <label className='text-gray-400 font-dana font-normal text-xs flex-grow-0 flex-none'>کامنت گذاشتید</label>
                                </div>
                                <label className='text-gray-400 font-dana font-normal text-xs text-right flex-grow-0' dir='rtl'>{convertToPersianNumbers(jd.toString())} {monthNames[jm - 1]}</label>
                            </div>
                            <label className='font-dana font-normal text-xs text-right text-black order-1' dir='rtl' >{comment} </label>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
