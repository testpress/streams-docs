---
sidebar_position: 1
---

# Getting Started

This SDK enables you to securely stream DRM-protected videos through your Android app.

[Sample Android App](https://github.com/testpress/sample-android-app)

## Adding dependency
- If you have a settings.gradle file in your project root, then you need to add the repositories in the settings.gradle inside dependencyResolutionManagement with the given path below. Else, this will go in build.gradle file in project root.

```
repositories {
    // other repo, e.g. google() or mavenCentral()
    maven {
        url "https://github.com/testpress/maven/raw/main/repo"
    }
}
```

Then reference the library in the dependency section:

``` groovy
dependencies {
    implementation "com.tpStreams.player:player:1.0.13b"
}
```

### Using ProGuard
If you use ProGuard in your app, you might need to add the following rule to your ProGuard file.
``` groovy
-keep class com.tpstream.player.* { *; }
```

## Integrating player fragment
Drop a TpStreamPlayerFragment into your activity layout with an id. This is the fastest and easiest way to integrate the player into your application. TpStreamPlayerFragment includes a prebuilt UI for the player with ample features and functionality.

``` xml
<androidx.fragment.app.FragmentContainerView
    android:id="@+id/tpstream_player_fragment"
    android:name="com.tpstream.player.TpStreamPlayerFragment"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:keepScreenOn="true"
    tools:layout="@layout/fragment_tp_stream_player" />
```
and receive its instance in your activity using findFragmentbyId()

``` kotlin
playerFragment = supportFragmentManager.findFragmentById(R.id.tpstream_player_fragment) as TpStreamPlayerFragment
```


## Initializing Player And Starting Playback

You can set listener class with onInitializationSuccess method and receive the player in the onInitializationSuccess callback.

```java
playerFragment.setOnInitializationListener(object: InitializationListener {
    override fun onInitializationSuccess(player: TpStreamPlayer) {
        Log.i(TAG, "onInitializationSuccess");
        this.player = player
    }
})
```

Once you have a player, you can start loading media onto it for playback. You'll need a TpInitParams object to specify which media to load along with your playback preferences.

A TpInitParams object needs videoId, [accessToken](../../authentication.md) and orgCode.

``` java
val parameters = TpInitParams.Builder()
    .setVideoId(videoId)
    .setAccessToken(accessToken)
    .setOrgCode("organization_id") //  app.tpstreams.com/api/v1/organizations_id/
    .build()
playerFragment.load(parameters)
```


Final code will look like this
```java
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_player)
    playerFragment =
        supportFragmentManager.findFragmentById(R.id.tpstream_player_fragment) asTpStreamPlayerFragment
    playerFragment.setOnInitializationListener(object: InitializationListener {
        override fun onInitializationSuccess(player: TpStreamPlayer) {
            val parameters = TpInitParams.Builder()
                .setVideoId(videoId)
                .setAccessToken(accessToken)
                .setOrgCode("your_subdomain")
                .build()
            playerFragment.load(parameters)
        }
    });
}
```

Call this below method to enable auto fullscreen on rotate

```bash
  playerFragment.enableAutoFullScreenOnRotate()
```