import React, { Component } from "react"
import { createPortal } from "react-dom"
import styles from "./Modal.module.css"

const modalRoot = document.querySelector("#modal")

export default class Modal extends Component {
	componentDidMount() {
		window.addEventListener("keydown", (e) => {
			if (e.code === "Escape") {
				this.props.onClose()
			}
		})
	}

	render() {
		return createPortal(
			<div className={styles.backdrop}>
				<div className={styles.modal}>{this.props.children}</div>
			</div>,
			modalRoot
		)
	}
}
