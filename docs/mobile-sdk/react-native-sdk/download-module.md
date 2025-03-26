---
sidebar_position: 3
---

# Download Module

The `Download Module` in `Tpstreams` allows users to manage offline video downloads efficiently. This includes observing download progress, pausing, resuming, canceling, and deleting downloads.

## Observing Download Data

To start observing the download data, call the `observeDownloadData` method from `FragmentModule`.

```js
import { NativeModules, DeviceEventEmitter } from 'react-native';

const { FragmentModule } = NativeModules;
FragmentModule.observeDownloadData();
```

Once initialized, the module will emit events whenever the download data changes.

## Listening to Download Events

To listen for download state changes, use `DeviceEventEmitter`:

```js
const subscription = DeviceEventEmitter.addListener(
  'onDownloadDataChanged',
  (event) => {
    console.log('Download data updated:', event.assets);
  }
);

// Remember to remove the listener when unmounting
subscription.remove();
```

## Managing Downloads

### Pause Download
Pauses an active download.

```js
FragmentModule.pauseDownload(videoId);
```

### Resume Download
Resumes a paused download.

```js
FragmentModule.resumeDownload(videoId);
```

### Cancel Download
Cancels an ongoing download.

```js
FragmentModule.cancelDownload(videoId);
```

### Delete Download
Deletes a completed download from storage.

```js
FragmentModule.deleteDownload(videoId);
```

## Rendering a Download List

Below is a sample implementation of a download list UI using `FlatList` in React Native:

```js
import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, FlatList, View, Button, DeviceEventEmitter } from 'react-native';
import { NativeModules } from 'react-native';

const { FragmentModule } = NativeModules;

const DownloadListScreen = () => {
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    FragmentModule.observeDownloadData();
    const subscription = DeviceEventEmitter.addListener('onDownloadDataChanged', (event) => {
      setDownloads(event.assets);
    });
    return () => subscription.remove();
  }, []);

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title} - {item.percentage}%</Text>
      {item.status === 'DOWNLOADING' && <Button title="Pause" onPress={() => FragmentModule.pauseDownload(item.videoId)} />}
      {item.status === 'COMPLETE' && <Button title="Delete" onPress={() => FragmentModule.deleteDownload(item.videoId)} />}
      {item.status === 'PAUSED' && <Button title="Resume" onPress={() => FragmentModule.resumeDownload(item.videoId)} />}
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList data={downloads} keyExtractor={(item) => item.videoId} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default DownloadListScreen;
```

This component observes download events and dynamically updates the list with buttons for user interactions.


