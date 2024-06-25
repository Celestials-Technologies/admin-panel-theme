import InfoBox from "./infoBox";

const EmailPerformance = () => {
    const infoBoxCommonProps = "bg-white border-[0.5px] border-dividerColor w-full flex justify-center items-center flex-col stripeShadow300";
    return (
        <div className="mt-4">
            <div className="flex w-1/2 justify-between items-center flex-wrap">
                <div className="w-full">
                    <InfoBox className={infoBoxCommonProps} title={'Total Subscribers'} info={`120`} description={'100 unique opens'} />
                    <InfoBox className={infoBoxCommonProps} title={'Newly added'} info={`0`} description={'100 unique clicks'} />
                </div>
                <div className="w-full">
                    <InfoBox className={infoBoxCommonProps} title={'Unsubscribed'} info={`5`} description="100 emails delivered" />
                    <InfoBox className={infoBoxCommonProps} title={'Deleted/Removed'} info={`12`} description="90 contacts converted" />
                </div>
            </div>
        </div>
    );
}

export default EmailPerformance