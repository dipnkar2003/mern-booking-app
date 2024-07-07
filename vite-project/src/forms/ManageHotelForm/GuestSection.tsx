import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"



const GuestSection = () => {
    const {register, formState:{errors}} = useFormContext<HotelFormData>()
  return (
    <div>
        <h2 className="font-bold text-2xl"> Guest Section </h2>
        <div  className="grid grid-cols-2 p-6 gap-5 bg-gray-300">
            <label > Adults
            <input type="number "  className="border rounded w-full py-2 px-3 font-normal"
            min={1}
            {...register("adultCount",{
                required:"this field is require"
            })}
            />
            {errors.adultCount?.message&&(
                <span className="text-red-500 ">{errors.adultCount?.message}</span>
            )}
            </label>
            <label > Child
            <input type="number "  className="border rounded w-full py-2 px-3 font-normal"
            min={0}
            {...register("childCount",{
                required:"this field is require"
            })}
            />
            {errors.childCount?.message&&(
                <span className="text-red-500 ">{errors.childCount?.message}</span>
            )}
            </label>
        </div>
    </div>
  )
}

export default GuestSection