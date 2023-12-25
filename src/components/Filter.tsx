
const Filter = () => {
  return (
    <div className="w-full justify-around flex   border-b-2  h-10 items-center shadow-sm  gap-3 text-[14px]">
      <div className="flex gap-2 items-center cursor-pointer">
        <span className="line-clamp-1 font-medium">ALL CATEGORY</span><svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fill-rule="evenodd"><path className="rui-w4DG7" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>

      </div>
      <div className="cursor-pointer"><span>Cars</span></div>
      <div className="cursor-pointer"><span>Motorcycles</span></div>
      <div className="cursor-pointer"><span className="line-clamp-1">Mobile Phones</span></div>
      <div className="cursor-pointer"><span className="line-clamp-1">For Sale: Houses & Apartments</span></div>
      <div className="cursor-pointer"><span className="line-clamp-1"> Scooters</span></div>
      <div className="cursor-pointer"><span className="line-clamp-1">Commercial & Other Vehicles</span></div>
      <div className="cursor-pointer"><span className="line-clamp-1">For Rent: Houses & Apartments</span></div>
    </div>
  )
}

export default Filter