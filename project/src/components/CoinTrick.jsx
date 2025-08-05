import React from 'react'
import { Card, Typography, Steps, Alert } from 'antd'

const { Title, Paragraph, Text } = Typography

function CoinTrick() {
  const steps = [
    {
      title: 'The Setup',
      description: 'Hold a coin in your dominant hand, positioned between your thumb and first two fingers.',
    },
    {
      title: 'The Vanish Motion',
      description: 'Pretend to transfer the coin to your other hand, but secretly keep it in the original hand.',
    },
    {
      title: 'The Misdirection',
      description: 'Close your "empty" hand (the one that supposedly has the coin) and focus attention on it.',
    },
    {
      title: 'The Big Reveal',
      description: 'Open the closed hand to show it\'s empty, then dramatically produce the coin from behind someone\'s ear!',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Title level={1} className="text-white mb-4">
            🪙 The Vanishing Coin Trick
          </Title>
          <Paragraph className="text-gray-300 text-lg">
            Master the art of making objects disappear and reappear at will!
          </Paragraph>
        </div>

        <Alert
          message="Perfect for Beginners!"
          description="This classic trick requires no special equipment - just a coin and some practice!"
          type="success"
          showIcon
          className="mb-6 bg-green-900/50 border-green-500/50"
        />

        <Card className="bg-black/30 border-emerald-500/50 backdrop-blur-sm mb-6">
          <Title level={3} className="text-emerald-300 mb-4">🎭 The Secret</Title>
          <Paragraph className="text-gray-200">
            The vanishing coin trick is all about <Text strong className="text-emerald-300">sleight of hand</Text> and 
            <Text strong className="text-emerald-300"> misdirection</Text>. The coin never actually leaves your dominant hand - 
            you just make your audience believe it does! The key is smooth, natural movements and confident presentation.
          </Paragraph>
        </Card>

        <Card className="bg-black/30 border-teal-500/50 backdrop-blur-sm mb-6">
          <Title level={3} className="text-teal-300 mb-4">🎪 Performance Steps</Title>
          <Steps
            direction="vertical"
            current={-1}
            items={steps.map((step, index) => ({
              title: <Text className="text-white">{step.title}</Text>,
              description: <Text className="text-gray-300">{step.description}</Text>,
            }))}
          />
        </Card>

        <Card className="bg-black/30 border-cyan-500/50 backdrop-blur-sm">
          <Title level={3} className="text-cyan-300 mb-4">🌟 Master's Secrets</Title>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Text strong className="text-white">Hand Positioning:</Text>
              <Paragraph className="text-gray-300 mt-2">
                Keep your thumb relaxed and fingers naturally curved. The coin should rest comfortably 
                in the palm-side of your fingers.
              </Paragraph>
            </div>
            <div>
              <Text strong className="text-white">Timing & Rhythm:</Text>
              <Paragraph className="text-gray-300 mt-2">
                Move your hands at the same speed when "transferring" the coin. Any hesitation 
                will give away the trick.
              </Paragraph>
            </div>
            <div>
              <Text strong className="text-white">Eye Contact:</Text>
              <Paragraph className="text-gray-300 mt-2">
                Look at the hand you want your audience to focus on. Where you look, 
                they will look too.
              </Paragraph>
            </div>
            <div>
              <Text strong className="text-white">The Production:</Text>
              <Paragraph className="text-gray-300 mt-2">
                When revealing the coin, do it with flourish! Behind the ear, from thin air, 
                or wherever feels most magical.
              </Paragraph>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default CoinTrick