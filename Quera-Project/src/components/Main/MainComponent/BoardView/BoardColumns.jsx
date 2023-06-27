/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import AddIcon from '@mui/icons-material/Add';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Tooltip, Button, Fade } from '@mui/material';
import { useEffect, useState } from 'react';
import EditModal from './EditModal';
import { EditBoard } from './EditBoard';
import axios from 'axios';
import { useAuth } from '../../../ContextApi/AuthContext';
import { baseurl } from '../../../../assets/baseUrl';
import { useParams } from 'react-router-dom';


export const BoardColumns = ({ name, children, color,boardid,deleteBoard,editBoard,position,dragref,updateBoard }) => {
    const [showModal, setShowModal] = useState(false);
    const {id} = useParams()
    const [edit,setEdit]=useState(false)
    const {token}=useAuth()
 
    
    
   

    function openModal() {
        setShowModal(true);
    }
    function closeModal() {
        setShowModal(false);
    }
    function boardSort(){
        
      axios.put(baseurl+ `/board/${boardid}/position/${dragref.current}`,{},{headers:{"x-auth-token":token}})
      .then((response)=>{
        updateBoard(id)
      })
      .catch((error)=>{
        console.log(error)
      })
    }

    return !edit ?(
        <div draggable onDragOver={(e)=>{e.preventDefault()}} onDragEnter={()=>dragref.current=position} onDragEnd={boardSort}   className="w-[260px]  left-[788px] gap-5 mt-[17px] flex flex-col items-center p-0 flex-none order-5 flex-grow-0" dir='ltr'>

            {/* column header  */}
            <div style={{borderColor:color}} className={`bg-white w-[250px] h-[41px] flex flex-row items-center justify-between border-t-[1px]  shadow-md rounded p-2 gap-1`}>
                <div className="bg-white max-w-[140px] h-[25px] gap-1 flex flex-row-reverse items-center p-0 flex-none order-1 flex-grow-0">
                    <label className="w-fit font-dana font-medium text-base text-right text-gray-800">
                        {name}
                    </label>
                    <div className="flex flex-col justify-center items-center pt-[3px] pr-[4px] pb-[2px] pl-[2px]  gap-10 w-[13px] h-[17px] bg-gray-100 rounded-full">
                        <p className="w-[5px] h-[15px] font-dana font-medium not-italic text-xs">۰</p>
                    </div>
                </div>

                {/* hidden  */}
                <div className="w-[48px] h-[24px] gap-1 flex flex-row items-center p-0 flex-none flex-grow-0 transition ease-in-out delay-150 duration-300 opacity-0 hover:opacity-100"
                onMouseLeave={closeModal}>
                    <Tooltip title="افزودن تسک جدید" TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} placement="top" arrow >
                        <AddIcon fontSize='' className="w-[24px] h-[24px] flex-none order-0 flex-grow-0"></AddIcon>
                    </Tooltip>
                    <MoreHorizIcon fontSize='' onClick={openModal}></MoreHorizIcon>
                    {showModal && <EditModal setEdit={setEdit} id={boardid} deleteBoard={deleteBoard} />}
                </div>
            </div>

            {/* tasks */}
            <div className="w-[260px] max-h-[760px] flex flex-col items-center p-0 flex-none order-1 flex-grow-0 overflow-y-scroll scrollbar-hide">
                {children}
            </div>
        </div>
    ):<EditBoard editBoard={editBoard} setEdit={setEdit} id={boardid} name={name}/>;
}
