import { SharedWith } from "./SharedWith";

export const SareProject = () => {

    return(
        <div className="w-full h-[800px] bg-shareProject flex justify-center items-center">{/* entire page */}

            {/* shareProject component */}
            <section className="rounded-2xl bg-white w-[470px] h-[365px] flex flex-col">
                {/* share project name & exit */}
                <article className="w-full h-[60px]">
                    <span></span>
                    <span></span>
                </article>

                {/* email input & button */}
                <article>
                    <form>
                        <input type="text" />
                        <button></button>
                    </form>
                </article>

                {/* link */}
                <article>
                    <span></span>
                    <span></span>
                    <button></button>
                </article>

                {/* shared with... */}
                <article className="w-full flex flex-col">
                    <header className="w-full">
                        <span className="font-dana font-normal text-sm text-stone-500">اشتراک گذاشته شده با</span>
                    </header>

                    <SharedWith />
                </article>
            </section>
        </div>
    );
}