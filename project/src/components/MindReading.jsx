import React from 'react'
import { Card, Typography, Steps, Tag, Divider } from 'antd'

const { Title, Paragraph, Text } = Typography

function MindReading() {
  const steps = [
    {
      title: 'The Mathematical Setup',
      description: 'Ask your spectator to think of any number between 1 and 10.',
    },
    {
      title: 'The Calculation Series',
      description: 'Guide them through: multiply by 2, add 8, divide by 2, then subtract their original number.',
    },
    {
      title: 'The "Mind Reading"',
      description: 'Dramatically pause, then confidently announce that their final number is 4!',
    },
    {
      title: 'The Amazement',
      description: 'Watch as they\'re stunned that you "read their mind" perfectly every time.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-pink-900 to-purple-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Title level={1} className="text-white mb-4">
            🔮 The Mind Reading Number Trick
          </Title>
          <Paragraph className="text-gray-300 text-lg">
            Convince anyone that you can read their thoughts with this mathematical marvel!
          </Paragraph>
        </div>

        <div className="flex justify-center gap-2 mb-6">
          <Tag color="magenta" className="text-sm">MATHEMATICAL</Tag>
          <Tag color="purple" className="text-sm">MENTALISM</Tag>
          <Tag color="red" className="text-sm">MIND-BLOWING</Tag>
        </div>

        <Card className="bg-black/30 border-red-500/50 backdrop-blur-sm mb-6">
          <Title level={3} className="text-red-300 mb-4">🧠 The Psychology</Title>
          <Paragraph className="text-gray-200">
            This trick exploits <Text strong className="text-red-300">mathematical certainty</Text> while creating 
            the illusion of mind reading. No matter what number they choose, the algebra will always 
            lead to the same result. The secret is in the presentation - sell it as genuine telepathy!
          </Paragraph>
        </Card>

        <Card className="bg-black/30 border-pink-500/50 backdrop-blur-sm mb-6">
          <Title level={3} className="text-pink-300 mb-4">🎯 The Method</Title>
          <Steps
            direction="vertical"
            current={-1}
            items={steps.map((step, index) => ({
              title: <Text className="text-white">{step.title}</Text>,
              description: <Text className="text-gray-300">{step.description}</Text>,
            }))}
          />
        </Card>

        <Card className="bg-black/30 border-purple-500/50 backdrop-blur-sm mb-6">
          <Title level={3} className="text-purple-300 mb-4">🔢 The Math Behind the Magic</Title>
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <Text className="text-gray-300">Let's say they pick the number <Text strong className="text-purple-300">X</Text>:</Text>
            <div className="mt-3 space-y-2 text-gray-200">
              <div>1. Start with: <Text code className="text-white">X</Text></div>
              <div>2. Multiply by 2: <Text code className="text-white">2X</Text></div>
              <div>3. Add 8: <Text code className="text-white">2X + 8</Text></div>
              <div>4. Divide by 2: <Text code className="text-white">(2X + 8) ÷ 2 = X + 4</Text></div>
              <div>5. Subtract original: <Text code className="text-white">(X + 4) - X = 4</Text></div>
            </div>
            <Divider className="border-purple-500/30" />
            <Text className="text-purple-300">Result is ALWAYS 4, regardless of their chosen number!</Text>
          </div>
        </Card>

        <Card className="bg-black/30 border-yellow-500/50 backdrop-blur-sm">
          <Title level={3} className="text-yellow-300 mb-4">🎭 Performance Tips</Title>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Text strong className="text-white block mb-2">🎪 Presentation Style</Text>
              <ul className="text-gray-300 space-y-1">
                <li>• Act like you're concentrating deeply</li>
                <li>• Use mystical language and gestures</li>
                <li>• Build suspense before the reveal</li>
                <li>• Express "surprise" at your own abilities</li>
              </ul>
            </div>
            <div>
              <Text strong className="text-white block mb-2">⚡ Advanced Variations</Text>
              <ul className="text-gray-300 space-y-1">
                <li>• Try different mathematical sequences</li>
                <li>• Use multiple spectators simultaneously</li>
                <li>• Combine with other mentalism effects</li>
                <li>• Create your own "mind reading" routine</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default MindReading