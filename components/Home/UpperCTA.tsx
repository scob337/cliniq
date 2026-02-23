import Button from "../ui/Button"

const UpperCTA = () => {
  return (
    <div className="w-full mt-20">
      <div
        className="max-w-6xl mx-auto 
        grid grid-cols-1 md:grid-cols-2
        items-center gap-10"
      >
        
<div
  className="
  order-2 md:order-1
  flex flex-col md:flex-row-reverse
  items-center md:items-start
  gap-5 text-center md:text-right"
>
  <h1 className="text-2xl font-bold">
    احجز أونلاين أو احنا نحجزلك
  </h1>

  <Button text="اتصل بنا" bgColor="#38B9DB" />
</div>

        <h1
          className="order-1 md:order-2
          text-[45px] font-bold text-[#004F6C]
          text-center md:text-right"
        >
          محتاج دكتور شاطر؟
        </h1>

      </div>
    </div>
  )
}

export default UpperCTA