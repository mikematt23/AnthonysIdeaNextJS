"use client"
import { RootState } from "@/store/store"
import { useRouter } from "next/navigation"
import { useEffect,useState } from "react"
import { useSelector } from "react-redux"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const SchedulePage = ()=>{
  const isLoggedIn = useSelector((state:RootState)=> state.user.isLoggedIn)
  const router = useRouter()
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [times, setTimes] =useState<number[]>([8,9,10,11,12,13,14,15,16])
  const [showTimes, setShowTimes] = useState<boolean>(false)

  useEffect(()=>{
    if(!isLoggedIn){
      router.push("/login")
    }
  },[isLoggedIn])

  async function handleDateChange(date: Date|null){
    if(startDate === null) return 

    const hour = startDate?.getHours()
    const min = startDate?.getMinutes()
    const totalmin = hour* 60 +  min

    const newTimes = times.filter((item)=> {
      const hourMin = item*60
      const diff = hourMin - totalmin
      return diff >=31
    })
    setTimes(newTimes)
    setStartDate(date)
    setShowTimes(true)
    console.log(newTimes)
  }

  return (
    <div className="felx items-center">
      <div className=" w-full flex flex-col items-center justfiy-center">
        <h2>Please select day of appoointment</h2>
        <DatePicker calendarClassName="custom"  minDate={new Date()} selected={startDate} onChange={handleDateChange} />
      </div>
      {showTimes &&<div>
        <h2>Avaivible Times:</h2>
        {times.map((time)=>{
          return (
            <div>
              <p>{time -12}</p>
            </div>
          )
        })}
        {times.length === 0 && <p>No more times Today</p>}
      </div>}
    </div>
  )
}

export default SchedulePage