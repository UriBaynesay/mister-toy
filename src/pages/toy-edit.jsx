import React from "react"
import { connect } from "react-redux"

import { toysService } from "../services/toy.service"
import { saveToy, removeToy } from "../store/actions/toys.action"

class _ToyEdit extends React.Component {
  state = {
    toy: {
      name: "",
      imgUrl: "",
      price: 0,
      labels: [],
      inStock: true,
    },
  }
  componentDidMount() {
    this.loadToy()
  }

  loadToy() {
    const { toyId } = this.props.match.params
    toysService.getById(toyId).then((toy) => {
      if (!toy) return
      this.setState({ toy })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.toyId !== this.props.match.params.toyId) {
      this.loadToy()
    }
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === "number" ? +target.value : target.value
    this.setState((prevState) => ({
      toy: { ...prevState.toy, [field]: value },
    }))
  }

  onToggleLabel = (label) => {
    const { toy } = this.state
    const labelIdx = toy.labels.findIndex((toyLabel) => toyLabel === label)
    if (labelIdx !== -1) {
      const newLabels = toy.labels.filter((toyLabel) => toyLabel !== label)
      this.setState({ toy: { ...toy, labels: newLabels } })
      return
    }
    this.setState({ toy: { ...toy, labels: [...toy.labels, label] } })
  }

  hasLabel(label) {
    const { toy } = this.state
    return toy.labels.find((toyLabel) => toyLabel === label)
  }

  onSave = () => {
    const { toy } = this.state
    if (!toy.name || !toy.imgUrl) return
    this.props.saveToy(toy)
  }

  render() {
    const labels = toysService.labels
    const { toy } = this.state
    return (
      <section className="toy-edit-container">
        <div className="edit-inputs-container">
          <label>
            Name :{" "}
            <input
              type="text"
              name="name"
              value={toy.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Image URL :
            <input
              type="text"
              name="imgUrl"
              value={toy.imgUrl}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Price :
            <input
              type="number"
              name="price"
              value={toy.price}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <div className="label-buttons-container">
          {labels.map((label, idx) => {
            return (
              <button
                key={idx}
                className="label-btn btn-light"
                style={{ color: `${this.hasLabel(label) ? "gray" : ""}` }}
                onClick={() => this.onToggleLabel(label)}
              >
                {label}
              </button>
            )
          })}
        </div>

        <button className="save-toy-btn btn" onClick={this.onSave}>
          Save Toy
        </button>

        {toy._id && (
          <button
          type="red"
            className="remove-toy-btn btn"
            onClick={() => {
              this.props.removeToy(toy._id).then(() => {
                this.props.history.push("/")
              })
            }}
          >
            Remove
          </button>
        )}
      </section>
    )
  }
}

function mapStateToProps(storeState) {
  return {}
}
const mapDispatchToProps = {
  saveToy,
  removeToy,
}

export const ToyEdit = connect(mapStateToProps, mapDispatchToProps)(_ToyEdit)
