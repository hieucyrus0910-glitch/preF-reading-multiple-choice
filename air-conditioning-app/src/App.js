import React, { useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import VocabularySection from './components/VocabularySection';
import GrammarSection from './components/GrammarSection';
import ReadingSection from './components/ReadingSection';
import SpeakingSection from './components/SpeakingSection';

const App = () => {
  const [feedback, setFeedback] = useState(null);

  return (
    <div className="app">
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1>Air Conditioning English Learning App</h1>
      </header>
      <Tabs className="mt-4">
        <TabList>
          <Tab>Vocabulary</Tab>
          <Tab>Grammar + Reading</Tab>
          <Tab>Speaking</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <VocabularySection />
          </TabPanel>
          <TabPanel>
            <GrammarSection />
          </TabPanel>
          <TabPanel>
            <SpeakingSection feedback={feedback} setFeedback={setFeedback} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default App;
