import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { subsAmountCounter } from "../../tools/Amount"
import {
  changeSalary,
  setSalary,
  saveSalary,
} from "../../redux/actions/salaryActions"
import styles from "../../style"

const Dashboard = () => {
  const subscribes = useSelector((state) => state.allSubs.subs)
  const salary = useSelector((state) => state.yourSalary.salary)
  const dispatch = useDispatch()

  const [input, setInput] = useState(false)
  const [montly, setMonthly] = useState(subsAmountCounter(subscribes))
  let percentage = Math.round((montly / salary) * 100)

  useEffect(() => {
    dispatch(setSalary())
  }, [])

  useEffect(() => {
    dispatch(saveSalary())
  }, [salary])

  useEffect(() => {
    setMonthly(subsAmountCounter(subscribes))
  }, [subscribes])

  return (
    <>
      <div className="mb-24">
        <div
          className={`${styles.flexCenterCol} text-center py-3 border-b-2 border-black`}
        >
          <p className="text-2xl">Your Profit</p>
          <div className="">
            {!input && <p className={`${styles.heading1}`}>{salary}</p>}
            {input && (
              <input
                type="number"
                className={`${styles.dashboardForm}`}
                onChange={(event) => dispatch(changeSalary(event.target.value))}
                value={salary}
              />
            )}
          </div>
          <p>USD/month</p>
          <button
            className="mt-2 text-xs text-slate-700/50"
            onClick={() => setInput(!input)}
          >
            change
          </button>
        </div>
        <div className={`${styles.flexCenterCol} text-center mt-3`}>
          <p className="text-2xl">Subscription</p>
          <p className={`${styles.heading1}`}>
            {Math.floor(montly * 100) / 100}
          </p>
          <p>USD/month</p>
        </div>
      </div>

      <div className={`${styles.flexCenterCol}`}>
        <p className="text-xl mb-9">on subscriptions, you spend:</p>
        <div className="w-48">
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
      </div>
    </>
  )
}

export default Dashboard
