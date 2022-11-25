import React, { useState } from "react"
import { useSelector } from "react-redux"
import styles from "../style"

const Header = ({ onAdd }) => {
  const subscribes = useSelector((state) => state.allSubs.subs)
  const [click, setClick] = useState(false)
  const [title, setTitle] = useState()
  const [cost, setCost] = useState()
  const [date, setDate] = useState()

  return (
    <div className={`mb-9 ${styles.flexNav}`}>
      <p className={`${styles.heading2}`}>Subscriptions: {subscribes.length}</p>
      <button
        onClick={() => setClick(!click)}
        className={`${styles.button} ${styles.transition} hover:bg-amber-300`}
      >
        Add
      </button>

      {click && (
        <div
          className={`${styles.flexCenter} ${styles.popUp}`}
          onClick={() => setClick(!click)}
        >
          <div
            className={`${styles.flexStartCol} ${styles.popUpBody}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={`${styles.popUpCloseButton}`}
              onClick={() => setClick(!click)}
            >
              X
            </button>
            <p className="mb-20">Add new subscription !</p>
            <form className={`${styles.flexNav}`}>
              <input
                type="text"
                name="title"
                id="title"
                onChange={(event) => setTitle(event.target.value)}
                className={`${styles.popUpForm}`}
                placeholder="Title..."
              />
              <input
                type="number"
                name="cost"
                id="cost"
                onChange={(event) => setCost(event.target.value)}
                step={0.01}
                className={`${styles.popUpForm}`}
                placeholder="Cost/month"
              />
              <input
                type="number"
                name="date"
                id="date"
                onChange={(event) => setDate(event.target.value)}
                className={`${styles.popUpForm}`}
                placeholder="Date of payment"
              />
            </form>
            <button
              className={`${styles.popUpSubmitButton} ${styles.transition}`}
              type="submit"
              onClick={() => onAdd(title, cost, date)}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
