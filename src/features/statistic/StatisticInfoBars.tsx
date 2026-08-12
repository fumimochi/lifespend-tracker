export default function StatisticInfoBars() {
  return(
    <div className="mt-10 flex flex-wrap justify-around gap-6">
        <div className="bg-white shadow-sm rounded-2xl p-5 w-55">
          <p className="text-gray-600">Total for June</p>
          <p className="text-2xl font-medium">$842</p>
          <p className="text-gray-500 text-sm">21 transactions</p>
        </div>
        <div className="bg-white shadow-sm rounded-2xl p-5 w-55">
          <p className="text-gray-600">Average spend</p>
          <p className="text-2xl font-medium">$40</p>
          <p className="text-gray-500 text-sm">for single transaction</p>
        </div>
        <div className="bg-white shadow-sm rounded-2xl p-5 w-55">
          <p className="text-gray-600">The biggest spend</p>
          <p className="text-2xl font-medium text-red-600">$120</p>
          <p className="text-gray-500 text-sm">Restaurant - 5 July</p>
        </div>
      </div>
  )
}