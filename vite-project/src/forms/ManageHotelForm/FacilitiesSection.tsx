import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"
import { hotelFacilities } from "../../config/hotel-option-config"


const FacilitiesSection = () => {
    hotelFacilities
    const {register, formState:{errors}} =  useFormContext<HotelFormData>()

  return (
    <div>
        <h2 className="text-2xl font-bold ">Facitities </h2>
        <div className="grid grid-cols-5 gap-3">
            {
                hotelFacilities.map((facility,i)=>(
                    <label >
                        <input type="checkbox" key={i} value={facility} 
                        {...register("facelities",{
                            validate:(facility)=>{
                                if(facility&& facility.length>0){
                                    return true;
                                } else {
                                    return " attest one facility is required"
                                }
                            }
                        })}
                        />
                        {facility}
                    </label>
                ))
            }
        </div>
        {errors.facelities&&(
            <span className="text-red-800">
                {errors.facelities.message}
            </span>
        )}
    </div>
  )
}

export default FacilitiesSection