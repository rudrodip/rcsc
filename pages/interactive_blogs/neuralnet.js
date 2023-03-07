import React, {useRef} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'

const NeuralNetwork = () => {
	const neuronRef = useRef(0)
	return (
		<div className='m-5 max-w-5xl mx-auto text-gray-300 text-lg'>
			<Head>
				<title>Introduction to neural network</title>
				<link rel="icon" type="image/x-icon" href="/segments/hehe.png"></link>
			</Head>
			<div id="intro" className='m-5'>
				<h1 className='text-5xl'>Introduction to <span className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600'>Neural Network</span></h1>
				<h1 className='mt-2 text-xl'>
					Author:
					<Link legacyBehavior href="/user/nHMgWGqM7HRf2wBRehqFtEdkRED2">
						<span className='text-blue-400 mx-2 cursor-pointer'>
							Rudrodip Sarker
						</span>
					</Link>
				</h1>
			</div>
			<div id="paragraph">
				<p className='text-xl my-2'>In this blog, we are going to deep dive into the neural network and understand it intuitively</p>
				<p className='font-bold'> What is a neural network? a network of neurons? </p>
				<p>Well, yes. Let's take a look at a formal definition.</p>
				<p className='text-white font-bold my-2'>Neural networks are a type of machine learning algorithm that is inspired by the structure and function of the human brain. They are used to analyze and understand complex data and to make predictions or decisions based on that data.</p>

				<p>Before we try to understand neural network, it's better to understand what neurons mean in this context.</p>

				<h1 className='text-blue-400 font-bold text-3xl my-3 underline' ref={neuronRef}>Neuron</h1>

				<p className='font-bold'>A neuron is a fundamental unit of computation that receives input signals from other neurons or external sources, processes the input, and produces an output signal that is propagated to other neurons in the network.</p>
				<p>I know it sounds confusing at first, but stick with me</p>
				<br></br>
				<p>Each neuron typically has two properties</p>
				<p className='mx-3 font-bold'>1. Weight</p>
				<p className='mx-3 font-bold'>2. Bias</p>
				<br></br>

				<p className='text-white'>The weight is like a knob that can be turned up or down <span className='text-blue-400'>to make the neuron more or less sensitive</span> to certain inputs. The bias is like a baseline value that the neuron starts with, which can also be adjusted to make the neuron more or less likely to <span className='text-red-400 cursor-pointer underline'>fire<sup>[1]</sup></span> its output.</p>

				<p>You know the ideal equation of straight line, right! It's <Latex>$$y = mx + c$$</Latex></p>
				<p>Similarly, in a neuron, the weight can be compared to the slope <span className='text-blue-400'>'m'</span>, which determines the strength of the connection between the input and the neuron. The bias can be compared to the y-intercept <span className='text-blue-400'>'c'</span>, which helps to adjust the output of the neuron.</p>
				<br></br>
				<p className='text-white my-2'>Let's take a look at a simple example</p>
				<p>Let's say we have neuron <span className='text-blue-400'>A</span> and neuron <span className='text-blue-400'>B</span>, and they are connected by a synapse (which is the connection between neurons). Neuron A has a weight of <span className='text-white font-bold'>0.5</span> and a bias of <span className='text-white font-bold'>1</span>.</p>

				<p>Neuron A receives an input of <span className='text-white font-bold'>2</span>, and it calculates its output as follows:</p>
				<Latex>$$A = input_0 \times weight_A + bias_A = 2 \times 0.5 + 1 = 2 + 1 = 3$$</Latex>
				<p>Here <span className='font-bold text-blue-400'><Latex>$input_0$</Latex></span> means the input from the previous neuron.</p>

				<p>Neuron B has a weight of <span className='text-white font-bold'>2</span> and a bias of <span className='text-white font-bold'>-1</span>, and it receives an input of <span className='text-white font-bold'>3</span> from neuron <span className='text-blue-400'>A</span>. Neuron <span className='text-blue-400'>B</span> calculates its output as follows:</p>
				<Latex>$$B = input_A \times weight_B + bias_B = 3 \times 2 - 1 = 6 - 1 = 5$$</Latex>
			</div>
		</div>
	)
}

export default NeuralNetwork