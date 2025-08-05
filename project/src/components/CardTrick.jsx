import React from 'react'
import { Card, Typography, Steps, Divider } from 'antd'

const { Title, Paragraph, Text } = Typography

function CardTrick() {
  const steps = [
    {
      title: 'Preparation',
      description: 'Ask your spectator to pick any card from the deck and remember it.',
    },
    {
      title: 'The False Shuffle',
      description: 'Shuffle the deck while secretly keeping track of the bottom card. This will be your "key card".',
    },
    {
      title: 'Card Placement',
      description: 'Have the spectator place their card on top of the deck, then place your key card on top of theirs.',
    },
    {
      title: 'The Reveal',
      description: 'Deal cards face up until you see your key card. The next card will be their chosen card!',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Title level={1} className="text-white mb-4">
            🎴 The Mind-Reading Card Trick
          </Title>
          <Paragraph className="text-gray-300 text-lg">
            Amaze your friends with this classic card trick that never fails to impress!
          </Paragraph>
        </div>

        <Card className="bg-black/30 border-purple-500/50 backdrop-blur-sm mb-6">
          <Title level={3} className="text-purple-300 mb-4">✨ The Magic</Title>
          <Paragraph className="text-gray-200">
            This trick relies on a simple but effective principle called the "key card" method. 
            By knowing one card's position, you can always find the spectator's chosen card. 
            The secret is in the preparation and misdirection!
          </Paragraph>
        </Card>

        <Card className="bg-black/30 border-blue-500/50 backdrop-blur-sm mb-6">
          <Title level={3} className="text-blue-300 mb-4">🎯 Step-by-Step Instructions</Title>
          <Steps
            direction="vertical"
            current={-1}
            items={steps.map((step, index) => ({
              title: <Text className="text-white">{step.title}</Text>,
              description: <Text className="text-gray-300">{step.description}</Text>,
            }))}
          />
        </Card>

        <Card className="bg-black/30 border-yellow-500/50 backdrop-blur-sm">
          <Title level={3} className="text-yellow-300 mb-4">💡 Pro Tips</Title>
          <ul className="text-gray-200 space-y-2">
            <li>• Practice the false shuffle beforehand - it's the key to the trick!</li>
            <li>• Keep talking to distract your audience while you spot your key card</li>
            <li>• Act surprised when you "find" their card to sell the illusion</li>
            <li>• Never repeat the trick immediately - mystery is everything!</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

export default CardTrick