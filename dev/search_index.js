var documenterSearchIndex = {"docs":
[{"location":"#YaoBlocksQobj","page":"Quickstart","title":"YaoBlocksQobj","text":"","category":"section"},{"location":"","page":"Quickstart","title":"Quickstart","text":"(Image: Build Status) (Image: Coverage)","category":"page"},{"location":"","page":"Quickstart","title":"Quickstart","text":"YaoBlocks interafce for the IBMQClient package.","category":"page"},{"location":"#Usage","page":"Quickstart","title":"Usage","text":"","category":"section"},{"location":"","page":"Quickstart","title":"Quickstart","text":"Create a circuit","category":"page"},{"location":"","page":"Quickstart","title":"Quickstart","text":"using Yao, YaoBlocksQobj\nqc = chain(3, put(1=>X), put(2=>Y) ,put(3=>Z), \n                put(2=>T), swap(1,2), put(3=>Ry(0.7)), \n                control(2, 1=>Y), control(3, 2=>Z))","category":"page"},{"location":"","page":"Quickstart","title":"Quickstart","text":"Creating headers is optional but if they should be in order for respective experiemnts","category":"page"},{"location":"","page":"Quickstart","title":"Quickstart","text":"# main header for the job\nheader = Dict(\"description\"=>\"test circuits\")\n\n# header for the experiments\nexp_header = [Dict(\"description\"=>\"1\")]","category":"page"},{"location":"","page":"Quickstart","title":"Quickstart","text":"Creating a Qobj","category":"page"},{"location":"","page":"Quickstart","title":"Quickstart","text":"q = CreateQobj([qc], id = \"test_id\", header= header, exp_header = exp_header)","category":"page"},{"location":"refs/#API-References","page":"API References","title":"API References","text":"","category":"section"},{"location":"refs/","page":"API References","title":"API References","text":"Modules = [YaoBlocksQobj]","category":"page"},{"location":"refs/#YaoBlocksQobj.CreateExperiment-Union{Tuple{Array{var\"#s6\", N} where {var\"#s6\"<:YaoAPI.AbstractBlock{N}, N}}, Tuple{N}, Tuple{Array{var\"#s5\", N} where {var\"#s5\"<:YaoAPI.AbstractBlock{N}, N}, Any}, Tuple{Array{var\"#s4\", N} where {var\"#s4\"<:YaoAPI.AbstractBlock{N}, N}, Any, Any}} where N","page":"API References","title":"YaoBlocksQobj.CreateExperiment","text":"CreateExperiment(qc, exp_header, exp_config)\n\nReturns and experiment type that consits of instructions.\n\n- `qc`: An `Array` of `ChainBlock`(circuits that are to be run).\n- `exp_header`(optional): Array of User-defined structure that contains metadata on each experiment and\nis not used by the backend. The header will be passed through to the result data structure unchanged. \nFor example, this may contain a fitting parameters for the experiment. In addition, this header can \ncontain a mapping of backend memory and backend qubits to OpenQASM registers. \nThis is because an OpenQASM circuit may contain multiple classical and quantum registers, \nbut Qobj flattens them into a single memory and single set of qubits.\n- `exp_config` (optional): An Array of Configuration structure for user settings that can be different in each\nexperiment. These will override the configuration settings of the whole job.\n\n\n\n\n\n","category":"method"},{"location":"refs/#YaoBlocksQobj.CreateQobj-Union{Tuple{Array{var\"#s5\", N} where {var\"#s5\"<:YaoAPI.AbstractBlock{N}, N}}, Tuple{N}} where N","page":"API References","title":"YaoBlocksQobj.CreateQobj","text":"CreateQobj(qc, id, header, nshots, exp_header, exp_config)\n\nCreates a `Qobj` based on the IBMQClient schema.\n\n- `qc`: An `Array` of `ChainBlock`(circuits that are to be run).\n- `id`(optional): User generated run identifier.\n- `header` (optional): User-defined structure that contains metadata on the job and is not used.\n- `nshots`: Number of times to repeat the experiment (for some simulators this may\nbe limited to 1, e.g., a unitary simulator).\nEach unitary gate has an efficient representation in this basis.\n- `exp_header`(optional): Array of User-defined structure that contains metadata on each experiment and\nis not used by the backend. The header will be passed through to the result data structure unchanged. \nFor example, this may contain a fitting parameters for the experiment. In addition, this header can \ncontain a mapping of backend memory and backend qubits to OpenQASM registers. \nThis is because an OpenQASM circuit may contain multiple classical and quantum registers, \nbut Qobj flattens them into a single memory and single set of qubits.\n- `exp_config` (optional): An Array of Configuration structure for user settings that can be different in each\nexperiment. These will override the configuration settings of the whole job.\n\n\n\n\n\n","category":"method"},{"location":"refs/#YaoBlocksQobj.generate_inst-Union{Tuple{YaoAPI.AbstractBlock{N}}, Tuple{N}} where N","page":"API References","title":"YaoBlocksQobj.generate_inst","text":"generate_inst(qc)\n\nParses the YaoIR into a list of IBMQ supported instructions\n\n- `qc`: A `ChainBlock`(circuit that is to be run).\n\n\n\n\n\n","category":"method"}]
}