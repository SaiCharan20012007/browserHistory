import './index.css'

const HistoryItem = props => {
  const {id, timeAccessed, logoUrl, title, domainUrl, deleteIconD} = props

  const deleteItem = () => {
    deleteIconD(id)
  }
  return (
    <li className="historyItem">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="iconLogo" />
      <p className="title">{title}</p>
      <p className="urlDes">{domainUrl}</p>

      <button
        type="button"
        onClick={deleteItem}
        testid="delete"
        className="deleteIcon"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="deleteIcon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
