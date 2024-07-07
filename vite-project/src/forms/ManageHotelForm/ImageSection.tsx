
import { useFormContext } from 'react-hook-form'
import { HotelFormData } from './ManageHotelForm'

const ImageSection = () => {
    const{register, formState:{errors}} = useFormContext<HotelFormData>()
  return (
    <div>
        <h2> Image </h2>
        <div className='border rounded  w-full p-3'>
        <input type="file" 
        multiple
        accept='image/*'
        className='w-full '
        {...register("imageFiles",{
            validate:(imageFiles)=>{
                const totalLength = imageFiles.length
                if(totalLength === 0){
                    return "At least one imahe should be added"
                }
                if(totalLength > 6){
                    return "Total number of image cannot be more than 6"
                }
            }
        })}
        />
        </div>
        {errors.imageFiles&&(
            <span className='text-red-700'>{errors.imageFiles.message}</span>
        )}
    </div>
  )
}

export default ImageSection