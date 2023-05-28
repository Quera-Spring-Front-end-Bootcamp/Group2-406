/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export const NewTask = ({show, setShow}) => {

    return(
        <div className="w-screen h-screen fixed flex z-40 justify-center items-center" style={{visibility:show ? "visible":"hidden"}}>
            <section className="w-[1166px] h-[576px] shadow-newTaskShadow rounded-3xl bg-white">
                {/* task name & exit */}
                <article>
                    <div>
                        <span></span>
                        <p></p>
                    </div>
                    <span></span>
                </article>

                {/* detected project and user */}
                <article>
                    <p></p>
                    <span></span>
                    <p></p>
                    <span></span>
                </article>

                {/* description of task */}
                <article>
                    <form>
                        <label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </label>
                    </form>
                </article>

                {/* upload file */}
                <article>
                    <p></p>
                    <button>
                        <span></span>
                        <p></p>
                    </button>
                </article>

                {/* other work on task & create task */}
                <article>
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <button></button>
                </article>
            </section>
        </div>
    );
}

