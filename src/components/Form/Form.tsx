
import { BsFloppy2Fill } from "react-icons/bs"
import "./styles.css"

function Form() {
  return (
    <div className="w-25 h-auto border border-light border-2">
      <form>
        <div className="d-flex flex-column p-2 gap-4">
          <div className="d-flex flex-column gap-2">
            <label className="text-light fs-7">Purpose:</label>
            <div className="d-flex gap-4 align-items-center">
              <div className="d-flex gap-1">
                <input
                  type="radio"
                  name="purpose_radio_group"
                  id="client"
                  defaultChecked
                />
                <label className="text-light fs-7" htmlFor="client">Client</label>
              </div>
              <div className="d-flex gap-1">
                <input
                  type="radio"
                  name="purpose_radio_group"
                  id="group"
                />
                <label className="text-light fs-7" htmlFor="group">Group</label >
              </div>
              <div className="d-flex gap-1">
                <input
                  type="radio"
                  name="purpose_radio_group"
                  id="agent"
                />
                <label className="text-light fs-7" htmlFor="agent">Agent</label>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-2">
            <label className="text-light" htmlFor="label">Label:</label>
            <input
              className="text-light border border-light rounded-3 form-control bg-transparent"
              type="text"
              id="label"
            />
            <label className="text-secondary fs-7">Please write label to here</label>
          </div>
          <div className="d-flex flex-column gap-2">
            <label className="text-light" htmlFor="key">Key:</label>
            <input
              className="text-light border border-light rounded-3 form-control bg-transparent"
              type="text"
              id="key"
            />
            <label className="text-secondary fs-7">Please write key to here</label>
          </div>
          <div className="d-flex flex-column gap-2">
            <label className="text-light fs-7" htmlFor="value">Status:</label>
            <div className="d-flex gap-4">
              <div className="d-flex align-items-center gap-1">
                <input
                  type="radio"
                  name="status_radio_group"
                  id="active"
                  defaultChecked
                />
                <label className="text-light fs-7" htmlFor="active">Active</label>
              </div>
              <div className="d-flex align-items-center gap-1">
                <input
                  type="radio"
                  name="status_radio_group"
                  id="passive"
                />
                <label className="text-light fs-7" htmlFor="passive">Passive</label>
              </div>
            </div>
          </div>
          <div className="d-flex mt-3">
            <button
              type="submit"
              className="d-flex gap-2 w-100 justify-content-center align-items-center btn btn-success"
            >Save <BsFloppy2Fill /></button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form