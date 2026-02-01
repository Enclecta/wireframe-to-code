"use client"

import { Textarea } from "@/components/ui/textarea"
import { CloudUpload, WandSparkles, X } from "lucide-react"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

function ImageUpload() {
  const AiModelList=[
    {
      name:'Gemini Google',
      icon:'/google.png'
    },
    {
      name:'llama By Meta',
      icon:'/meta.png'
    },
    {
     name:'Deepseek',
     icon:'/deepseek.png' 
    }
  ]
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const onImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files[0]) {
      const imageUrl = URL.createObjectURL(files[0])
      setPreviewUrl(imageUrl)
    }
  }

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {!previewUrl ? (
          <div className="p-7 border border-dashed rounded-md shadow-md flex flex-col items-center justify-center">
            <CloudUpload className="h-10 w-10" />
            <h2 className="font-bold text-lg">Upload Image</h2>
            <p className="text-gray-400 mt-3">
              Click Button to Select Wireframe Image
            </p>

            <div className="p-5 border border-dashed w-full flex mt-7 justify-center">
              <label htmlFor="imageSelect">
                <h2 className="p-2 bg-primary text-black rounded-md px-4 cursor-pointer">
                  Select Image
                </h2>
              </label>
            </div>

            <input
              type="file"
              id="imageSelect"
              className="hidden"
              multiple={false}
              onChange={onImageSelect}
            />
          </div>
        ) : (
          <div className="p-5 border border-dashed ">
          <Image
              src={previewUrl}
              alt="preview"
              width={500}
              height={500}
              className="w-full h-[300px] object-contain"
              
            />
              <X className="mt-5 flex ite justify-end w-full cursor-pointer"  
              onClick={()=> setPreviewUrl(null)}/> 
          </div>
        )}
        <div className="p-7 border shadow-md rounded-lg">
          <h2 className="font-bold text-lg">Select AI Model</h2>
          <Select >
  <SelectTrigger className="w-full mt-3">
    <SelectValue placeholder="Select AI Model" />
  </SelectTrigger>
  <SelectContent>
    {AiModelList.map((model,index)=>(
       <SelectItem value={model.name}>
        <div key={index} className="flex items-center gap-2">
          <Image src={model.icon} alt={model.name} width={25} height={25}/>
          <h2> {model.name}</h2>
        </div>
       </SelectItem>
      
    ))}
   
  </SelectContent>
</Select>
                      
          <h2 className="font-bold text-lg mt-5">Enter Description about your webpage</h2>
          <Textarea className="mt-3 h-[200px]" placeholder=""/>

        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
          <Button> <WandSparkles />Convert to Code</Button>
      </div>
    </div>
  )
}

export default ImageUpload
