import { Component } from "react"
import Modal from "./components/Modal/Modal"

class App extends Component {
	state = {
		showModal: false,
	}

	toggleModal = () => {
		this.setState(({ showModal }) => ({
			showModal: !showModal,
		}))
	}
	render() {
		const { showModal } = this.state
		return (
			<>
				<button onClick={this.toggleModal} type="button">
					OpenMOdal
				</button>
				{showModal && (
					<Modal onClose={this.toggleModal}>
						<h1>Hello</h1>
						<button onClick={this.toggleModal} type="button">
							CloseMOdal
						</button>
					</Modal>
				)}
			</>
		)
	}
}

export default App
