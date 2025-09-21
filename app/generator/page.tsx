"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  CalendarIcon,
  Zap,
  Brain,
  BarChart3,
  Play,
  Pause,
  RotateCcw,
  Download,
  Settings,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import { useState } from "react"

export default function TimetableGenerator() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [generationProgress, setGenerationProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState("")
  const [simulationResults, setSimulationResults] = useState<any>(null)
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("genetic")

  // AI/ML Configuration
  const [aiConfig, setAiConfig] = useState({
    populationSize: 100,
    generations: 50,
    mutationRate: 0.1,
    crossoverRate: 0.8,
    elitismRate: 0.2,
    convergenceThreshold: 0.95,
  })

  // Simulation phases
  const phases = [
    "Initializing AI Model",
    "Loading Course Data",
    "Analyzing Faculty Availability",
    "Processing Room Constraints",
    "Running Genetic Algorithm",
    "Optimizing Schedule",
    "Resolving Conflicts",
    "Validating Results",
    "Generating Final Timetable",
  ]

  // Sample simulation data
  const algorithmOptions = [
    {
      id: "genetic",
      name: "Genetic Algorithm",
      description: "Evolutionary approach with crossover and mutation",
      efficiency: 94,
      speed: "Medium",
      bestFor: "Complex constraints",
    },
    {
      id: "simulated-annealing",
      name: "Simulated Annealing",
      description: "Temperature-based optimization technique",
      efficiency: 89,
      speed: "Fast",
      bestFor: "Quick solutions",
    },
    {
      id: "particle-swarm",
      name: "Particle Swarm Optimization",
      description: "Swarm intelligence-based approach",
      efficiency: 91,
      speed: "Medium",
      bestFor: "Multi-objective optimization",
    },
    {
      id: "neural-network",
      name: "Neural Network",
      description: "Deep learning approach with pattern recognition",
      efficiency: 96,
      speed: "Slow",
      bestFor: "Learning from historical data",
    },
  ]

  const constraints = [
    { id: "faculty-availability", name: "Faculty Availability", weight: 0.9, enabled: true },
    { id: "room-capacity", name: "Room Capacity", weight: 1.0, enabled: true },
    { id: "equipment-requirements", name: "Equipment Requirements", weight: 0.8, enabled: true },
    { id: "student-preferences", name: "Student Preferences", weight: 0.6, enabled: true },
    { id: "time-preferences", name: "Time Preferences", weight: 0.7, enabled: true },
    { id: "workload-balance", name: "Workload Balance", weight: 0.8, enabled: true },
  ]

  const simulateGeneration = async () => {
    setIsGenerating(true)
    setGenerationProgress(0)
    setSimulationResults(null)

    for (let i = 0; i < phases.length; i++) {
      setCurrentPhase(phases[i])
      setGenerationProgress(((i + 1) / phases.length) * 100)
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    // Simulate results
    setSimulationResults({
      totalSchedules: 1250,
      conflictsResolved: 23,
      efficiency: 94.5,
      facultySatisfaction: 92,
      roomUtilization: 87,
      generationTime: "2m 34s",
      iterations: 847,
      convergenceGeneration: 42,
    })

    setIsGenerating(false)
    setCurrentPhase("Generation Complete")
  }

  const resetSimulation = () => {
    setIsGenerating(false)
    setGenerationProgress(0)
    setCurrentPhase("")
    setSimulationResults(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <CalendarIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">ClassEdge</span>
              </div>
              <Badge variant="default" className="bg-purple-100 text-purple-800">
                AI Timetable Generator
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Advanced Settings
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Config
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Timetable Generator</h1>
          <p className="text-gray-600">
            Generate optimized timetables using advanced AI/ML algorithms with real-time simulation
          </p>
        </div>

        {/* Generation Control Panel */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-600" />
              <span>AI Generation Control</span>
            </CardTitle>
            <CardDescription>Configure and run the AI-powered timetable generation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div>
                  <Label>Target Semester</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select semester" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="spring-2024">Spring 2024</SelectItem>
                      <SelectItem value="fall-2024">Fall 2024</SelectItem>
                      <SelectItem value="summer-2024">Summer 2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>AI Algorithm</Label>
                  <Select value={selectedAlgorithm} onValueChange={setSelectedAlgorithm}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {algorithmOptions.map((algo) => (
                        <SelectItem key={algo.id} value={algo.id}>
                          {algo.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label>Optimization Priority</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conflicts">Minimize Conflicts</SelectItem>
                      <SelectItem value="efficiency">Maximize Efficiency</SelectItem>
                      <SelectItem value="satisfaction">Faculty Satisfaction</SelectItem>
                      <SelectItem value="utilization">Room Utilization</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Generation Mode</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">Full Generation</SelectItem>
                      <SelectItem value="incremental">Incremental Update</SelectItem>
                      <SelectItem value="simulation">Simulation Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <Button
                  onClick={simulateGeneration}
                  disabled={isGenerating}
                  className="bg-purple-600 hover:bg-purple-700"
                  size="lg"
                >
                  {isGenerating ? (
                    <>
                      <Pause className="w-5 h-5 mr-2" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 mr-2" />
                      Start Generation
                    </>
                  )}
                </Button>
                <Button onClick={resetSimulation} variant="outline" disabled={isGenerating}>
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
              </div>
            </div>

            {/* Generation Progress */}
            {isGenerating && (
              <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-purple-800">Generation Progress</span>
                  <span className="text-sm text-purple-600">{Math.round(generationProgress)}%</span>
                </div>
                <Progress value={generationProgress} className="mb-2" />
                <p className="text-sm text-purple-600">{currentPhase}</p>
              </div>
            )}

            {/* Results Summary */}
            {simulationResults && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-800">Generation Completed Successfully</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Efficiency:</span>
                    <span className="ml-2 font-medium text-green-800">{simulationResults.efficiency}%</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Conflicts:</span>
                    <span className="ml-2 font-medium text-green-800">{simulationResults.conflictsResolved}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Time:</span>
                    <span className="ml-2 font-medium text-green-800">{simulationResults.generationTime}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Iterations:</span>
                    <span className="ml-2 font-medium text-green-800">{simulationResults.iterations}</span>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Tabs defaultValue="algorithms" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="algorithms">AI Algorithms</TabsTrigger>
            <TabsTrigger value="constraints">Constraints</TabsTrigger>
            <TabsTrigger value="parameters">Parameters</TabsTrigger>
            <TabsTrigger value="simulation">Simulation</TabsTrigger>
            <TabsTrigger value="analysis">Analysis</TabsTrigger>
          </TabsList>

          {/* AI Algorithms */}
          <TabsContent value="algorithms">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {algorithmOptions.map((algo) => (
                <Card
                  key={algo.id}
                  className={`cursor-pointer transition-all ${
                    selectedAlgorithm === algo.id ? "ring-2 ring-purple-500 bg-purple-50" : ""
                  }`}
                  onClick={() => setSelectedAlgorithm(algo.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{algo.name}</CardTitle>
                      <Badge variant="outline">{algo.efficiency}% Efficiency</Badge>
                    </div>
                    <CardDescription>{algo.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Speed:</span>
                        <span className="font-medium">{algo.speed}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Best for:</span>
                        <span className="font-medium">{algo.bestFor}</span>
                      </div>
                      <Progress value={algo.efficiency} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Constraints Configuration */}
          <TabsContent value="constraints">
            <Card>
              <CardHeader>
                <CardTitle>Constraint Configuration</CardTitle>
                <CardDescription>Configure and weight different scheduling constraints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {constraints.map((constraint) => (
                    <div key={constraint.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Switch checked={constraint.enabled} />
                        <div>
                          <h3 className="font-medium text-gray-900">{constraint.name}</h3>
                          <p className="text-sm text-gray-500">Weight: {constraint.weight}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-32">
                          <Slider
                            value={[constraint.weight * 100]}
                            max={100}
                            step={5}
                            className="w-full"
                            disabled={!constraint.enabled}
                          />
                        </div>
                        <span className="text-sm font-medium w-12">{Math.round(constraint.weight * 100)}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Algorithm Parameters */}
          <TabsContent value="parameters">
            <Card>
              <CardHeader>
                <CardTitle>Algorithm Parameters</CardTitle>
                <CardDescription>Fine-tune AI algorithm parameters for optimal performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label>Population Size</Label>
                      <div className="flex items-center space-x-4 mt-2">
                        <Slider
                          value={[aiConfig.populationSize]}
                          onValueChange={(value) => setAiConfig({ ...aiConfig, populationSize: value[0] })}
                          max={500}
                          min={50}
                          step={10}
                          className="flex-1"
                        />
                        <span className="w-12 text-sm font-medium">{aiConfig.populationSize}</span>
                      </div>
                    </div>
                    <div>
                      <Label>Generations</Label>
                      <div className="flex items-center space-x-4 mt-2">
                        <Slider
                          value={[aiConfig.generations]}
                          onValueChange={(value) => setAiConfig({ ...aiConfig, generations: value[0] })}
                          max={200}
                          min={10}
                          step={5}
                          className="flex-1"
                        />
                        <span className="w-12 text-sm font-medium">{aiConfig.generations}</span>
                      </div>
                    </div>
                    <div>
                      <Label>Mutation Rate</Label>
                      <div className="flex items-center space-x-4 mt-2">
                        <Slider
                          value={[aiConfig.mutationRate * 100]}
                          onValueChange={(value) => setAiConfig({ ...aiConfig, mutationRate: value[0] / 100 })}
                          max={50}
                          min={1}
                          step={1}
                          className="flex-1"
                        />
                        <span className="w-12 text-sm font-medium">{Math.round(aiConfig.mutationRate * 100)}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label>Crossover Rate</Label>
                      <div className="flex items-center space-x-4 mt-2">
                        <Slider
                          value={[aiConfig.crossoverRate * 100]}
                          onValueChange={(value) => setAiConfig({ ...aiConfig, crossoverRate: value[0] / 100 })}
                          max={100}
                          min={50}
                          step={5}
                          className="flex-1"
                        />
                        <span className="w-12 text-sm font-medium">{Math.round(aiConfig.crossoverRate * 100)}%</span>
                      </div>
                    </div>
                    <div>
                      <Label>Elitism Rate</Label>
                      <div className="flex items-center space-x-4 mt-2">
                        <Slider
                          value={[aiConfig.elitismRate * 100]}
                          onValueChange={(value) => setAiConfig({ ...aiConfig, elitismRate: value[0] / 100 })}
                          max={50}
                          min={5}
                          step={5}
                          className="flex-1"
                        />
                        <span className="w-12 text-sm font-medium">{Math.round(aiConfig.elitismRate * 100)}%</span>
                      </div>
                    </div>
                    <div>
                      <Label>Convergence Threshold</Label>
                      <div className="flex items-center space-x-4 mt-2">
                        <Slider
                          value={[aiConfig.convergenceThreshold * 100]}
                          onValueChange={(value) => setAiConfig({ ...aiConfig, convergenceThreshold: value[0] / 100 })}
                          max={99}
                          min={80}
                          step={1}
                          className="flex-1"
                        />
                        <span className="w-12 text-sm font-medium">
                          {Math.round(aiConfig.convergenceThreshold * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Simulation Results */}
          <TabsContent value="simulation">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Real-time Simulation</CardTitle>
                  <CardDescription>Monitor AI algorithm performance in real-time</CardDescription>
                </CardHeader>
                <CardContent>
                  {simulationResults ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{simulationResults.totalSchedules}</div>
                          <div className="text-sm text-blue-600">Schedules Generated</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{simulationResults.efficiency}%</div>
                          <div className="text-sm text-green-600">Efficiency Score</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">
                            {simulationResults.facultySatisfaction}%
                          </div>
                          <div className="text-sm text-purple-600">Faculty Satisfaction</div>
                        </div>
                        <div className="text-center p-3 bg-orange-50 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600">{simulationResults.roomUtilization}%</div>
                          <div className="text-sm text-orange-600">Room Utilization</div>
                        </div>
                      </div>
                      <div className="pt-4 border-t">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Convergence Progress</span>
                          <span>
                            {simulationResults.convergenceGeneration}/{aiConfig.generations} generations
                          </span>
                        </div>
                        <Progress value={(simulationResults.convergenceGeneration / aiConfig.generations) * 100} />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Brain className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Run a simulation to see real-time results</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Detailed algorithm performance analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  {simulationResults ? (
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Conflict Resolution Rate</span>
                          <span className="font-medium">96%</span>
                        </div>
                        <Progress value={96} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Resource Optimization</span>
                          <span className="font-medium">89%</span>
                        </div>
                        <Progress value={89} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Time Efficiency</span>
                          <span className="font-medium">92%</span>
                        </div>
                        <Progress value={92} className="h-2" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Constraint Satisfaction</span>
                          <span className="font-medium">94%</span>
                        </div>
                        <Progress value={94} className="h-2" />
                      </div>
                      <Alert>
                        <TrendingUp className="h-4 w-4" />
                        <AlertDescription>
                          Algorithm converged in {simulationResults.convergenceGeneration} generations, achieving
                          optimal solution efficiency.
                        </AlertDescription>
                      </Alert>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <BarChart3 className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Performance metrics will appear after simulation</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analysis & Insights */}
          <TabsContent value="analysis">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Insights</CardTitle>
                  <CardDescription>Machine learning insights and recommendations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <Brain className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-blue-800">Pattern Recognition</p>
                          <p className="text-xs text-blue-600">
                            AI detected optimal time slots: 9-11 AM and 2-4 PM show highest efficiency rates
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-green-800">Optimization Opportunity</p>
                          <p className="text-xs text-green-600">
                            Consolidating Tuesday classes could improve room utilization by 12%
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-purple-50 border border-purple-200 rounded-lg">
                      <div className="flex items-start space-x-2">
                        <Zap className="w-5 h-5 text-purple-600 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-purple-800">Predictive Analysis</p>
                          <p className="text-xs text-purple-600">
                            Based on historical data, expect 15% increase in enrollment for next semester
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Scenario Comparison</CardTitle>
                  <CardDescription>Compare different generation scenarios</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">Current Scenario</span>
                        <Badge variant="default">Active</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>Efficiency: 94%</div>
                        <div>Conflicts: 5</div>
                        <div>Time: 2m 34s</div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">Alternative A</span>
                        <Badge variant="outline">Simulated</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>Efficiency: 91%</div>
                        <div>Conflicts: 8</div>
                        <div>Time: 1m 45s</div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">Alternative B</span>
                        <Badge variant="outline">Simulated</Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div>Efficiency: 96%</div>
                        <div>Conflicts: 3</div>
                        <div>Time: 4m 12s</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
