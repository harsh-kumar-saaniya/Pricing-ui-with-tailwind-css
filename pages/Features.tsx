import Icon1 from "./Icons/Icon1"
import Icon2 from "./Icons/Icon2"
import Icon3 from "./Icons/Icon3";



export default function Feature() {
    return (
        <div className="flex border-3 flex-wrap mt-10 max-w-fit mx-auto ">
            <div className="flex items-center max-w-sm mx-5 mb-10">
                <Icon1 />
                <p className="ml-8">30 days money back Guarantee</p>
            </div>
            <div className="flex items-center mx-5 mb-10">
                <Icon2 />
                <p className="ml-8">No setup fees 100% hassle-free</p>
            </div>
            <div className="flex items-center mx-5 mb-10">
                <Icon3 />
                <p className="ml-8">No monthly subscription Pay once and for all</p>
            </div>
        </div>
    );
}