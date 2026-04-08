---
sidebar_position: 1
---

# Getting Started

TPStreams Android SDK provides an easy way to integrate video playback and offline downloads into your Android application. It supports DRM-protected content, adaptive bitrate streaming, and customizable player UI.

## Installation

Add the JitPack repository to your `settings.gradle` file:

```kotlin
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        maven { url = uri("https://jitpack.io") }
    }
}
```

Add the TPStreams SDK dependency to your app level `build.gradle.kts` file:

```kotlin
dependencies {
    implementation("com.github.testpress:TPStreamsAndroidPlayer:1.1.11-beta.1")
}
```

## Basic Setup

### Initialize the SDK
Initialize the SDK in your `Application` class or the `onCreate` method of your main activity:

#### Option 1: In Application Class (Recommended)
```kotlin
import android.app.Application
import com.tpstreams.player.TPStreamsSDK

class MyApp : Application() {
    override fun onCreate() {
        super.onCreate()
        TPStreamsSDK.init("YOUR_ORG_ID")
    }
}
```

#### Option 2: In Activity Class
```kotlin
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.tpstreams.player.TPStreamsSDK

class PlayerActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_player)

        TPStreamsSDK.init("YOUR_ORG_ID")
    }
}
```

### Add Player View to Layout
Add the `TPStreamsPlayerView` to your activity or fragment layout XML:

```xml
<com.tpstreams.player.TPStreamsPlayerView
    android:id="@+id/tp_player_view"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    app:layout_constraintDimensionRatio="16:9" />
```

### Initialize the Player
In your Activity or Fragment, create a `TPStreamsPlayer` instance and attach it to the view:

```kotlin
import com.tpstreams.player.TPStreamsPlayer

// Create player instance
val player = TPStreamsPlayer.create(
    context = this, // Use requireContext() if in a Fragment
    assetId = "YOUR_ASSET_ID",
    accessToken = "YOUR_ACCESS_TOKEN",
    shouldAutoPlay = true, // Default is true
    enableDownload = true,  // Set to true to enable download feature in UI
    downloadMetadata = mapOf("key" to "value") // Custom metadata for downloads
)

// Attach to view
binding.tpPlayerView.player = player
```