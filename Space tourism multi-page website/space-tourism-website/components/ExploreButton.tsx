interface Props {}

const ExploreButton: React.FC<Props> = (props) => {
    return (
        <button className="flex relative z-10 items-center justify-center w-[150px] h-[150px] tablet:w-[242px] tablet:h-[242px] desktop:w-[274px] desktop:h-[274px] bg-neutral-white rounded-full hover:before:content-[''] before:z-0 before:absolute  before:h-full before:w-full hover:before:h-[450px] hover:before:w-[450px] before:bg-neutral-white before:opacity-[0.1036] before:rounded-full before:transition-all before:ease-in-out before:duration-500">
            <h4 className="text-neutral-dark-blue">EXPLORE</h4>
        </button>
    );
};

export default ExploreButton;