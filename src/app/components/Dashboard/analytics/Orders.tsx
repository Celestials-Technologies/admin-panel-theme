import InfoBox from "./infoBox"

const Orders = () => {
    return (
        <div className="bg-white px-30 py-4 shadow-stripeShadow300 rounded-lg">
            <div className="max-w-[375px]">
                <InfoBox title={"Total Orders"} info={"1000"} />
                <div className="flex justify-between">
                    <InfoBox className="w-1/2" title={"Total Revenue"} info={"$15,000"} />
                    <InfoBox className="w-1/2" title={"Revenue by Ryzeo"} info={"$15,000"} />
                </div>
                <div className="flex justify-between">
                    <InfoBox className="w-1/2" title={"From workflows"} info={"$15,000"} />
                    <InfoBox className="w-1/2" title={"From Campaigns"} info={"$15,000"} />
                </div>
                <InfoBox title={"Spent on Ryzeo"} info={"$15,000"} />
            </div>
        </div>
    )
}
export default Orders