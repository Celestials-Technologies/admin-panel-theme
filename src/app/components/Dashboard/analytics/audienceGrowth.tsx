import InfoBox from "./infoBox";

const AudienceGrowth = () => {
    const infoBoxCommonProps = "bg-white mt-4 w-full flex justify-center items-center flex-col rounded-lg stripeShadow300";

    return (
        <div className="flex justify-between items-center gap-6 flex-wrap">
            <InfoBox className={infoBoxCommonProps} title={'Total Subscribers'} info={`120`} />
            <InfoBox className={infoBoxCommonProps} title={'Newly added'} info={`0`} />
            <InfoBox className={infoBoxCommonProps} title={'Unsubscribed'} info={`5`} />
            <InfoBox className={infoBoxCommonProps} title={'Deleted/Removed'} info={`12`} />
        </div>
    );
};

export default AudienceGrowth;
