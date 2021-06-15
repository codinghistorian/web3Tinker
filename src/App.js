import React, { Component } from 'react';
import Web3 from 'web3';
import Token1 from './abis/core/Token1.json'

import logo from './logo.svg';
import './App.css';

class App extends Component {

	render() {
	return (
	<div> nothing </div>
	)

	}

	async componentWillMount() {
	await this.loadWeb3()
	await this.loadBlockchainData()
	}

	async loadWeb3() {
	 if (window.ethereum) {
	 	window.web3 = new Web3(window.ethereum)
	 	await window.ethereum.enable()
	 }
	 else if (window.web3) {
	 	window.web3 = new Web3(window.web3.currentProvider)
	 }
	 else {
	 	window.alert('Non-Ethereum browser detected. Use Metamask!')
	 }

	}

	async loadBlockchainData() {
	const web3 = window.web3
	//load account
	const accounts = await web3.eth.getAccounts()
	console.log(accounts)
	//Network // IDEA:
	const networkId = await web3.eth.net.getId()
	const networkData = await Token1.networks[networkId]
	console.log(networkId)
	console.log(networkData)

	if(networkData) {
		const token1 = new web3.eth.Contract(Token1.abi, networkData.address)
		console.log(token1)
	}

	}

}

export default App;
