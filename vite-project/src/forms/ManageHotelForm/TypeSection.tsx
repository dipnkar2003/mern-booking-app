import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"

import { hotelTypes } from "../../config/hotel-option-config"

const TypeSection = () => {
    const {register ,watch, formState:{errors}} = useFormContext<HotelFormData>()
    const typeWatch = watch("type")
  return (
    <div>
        <h2 className="text-2xl font-bold mb-3">Type</h2>
        <div className="grid grid-cols-5 gap-2">
            {hotelTypes.map((type)=>(
                <label  className={
                    typeWatch === type ?"cuesior-pointer p-2 bg-blue-400 rounded-full text-sm":"cuesior-pointer p-2 bg-gray-400 rounded-full text-sm"
                }>
                    <input type="radio" value={type} {...register("type",{required:"this field is require"})} className="hidden"/>
                    
                    <span className="">
                        {type}
                    </span>
                </label>
            ))}
        </div>
        {errors.type && (
                   <span className="text-red-500">{errors.type.message}</span>
                )}

    </div>
  )
}

export default TypeSection