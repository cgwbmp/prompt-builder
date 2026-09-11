import type { Prompt } from '../types'

export const mobile: Prompt[] = [
  {
    id: 'mobile.platform-conventions',
    title: 'Follow HIG and Material',
    prompt:
      'Follow the Apple Human Interface Guidelines on iOS and Material Design on Android for navigation, controls, typography, and iconography rather than one custom design on both. Use the platform tab bar, back behavior, share sheet, date picker, and alert styles so users can reuse habits they already have.',
    category: 'mobile',
  },
  {
    id: 'mobile.native-navigation-stack',
    title: 'Native navigation stack',
    prompt:
      'Use the platform navigation stack (UINavigationController, Jetpack Navigation, React Navigation native-stack, Flutter Navigator 2.0 / go_router) so swipe-back, the Android back gesture, predictive back, and state restoration work without custom code. Keep tab bars to three to five destinations and never nest a tab bar inside another.',
    category: 'mobile',
  },
  {
    id: 'mobile.android-back-behavior',
    title: 'Predictable Android back',
    prompt:
      'Handle the Android back gesture and button predictably: close sheets, dialogs, and the keyboard first, then pop the current screen, and never exit the app from a nested screen without confirmation. Opt in to predictive back so the system animation previews the destination.',
    category: 'mobile',
  },
  {
    id: 'mobile.safe-areas',
    title: 'Respect safe areas',
    prompt:
      'Respect safe area insets on every screen (notch, Dynamic Island, home indicator, display cutouts, gesture navigation bar). Draw backgrounds edge to edge but keep text and interactive controls inside the insets, and re-check in landscape.',
    category: 'mobile',
  },
  {
    id: 'mobile.touch-targets-thumb-zone',
    title: 'Touch targets and thumb zone',
    prompt:
      'Make every touch target at least 44 by 44 pt on iOS and 48 by 48 dp on Android with at least 8 dp between targets, and place primary actions in the bottom third of the screen where thumbs reach. Keep destructive actions away from the primary action and out of easy-reach zones.',
    category: 'mobile',
  },
  {
    id: 'mobile.gesture-conflicts',
    title: 'Avoid gesture conflicts',
    prompt:
      'Do not attach custom gestures that collide with system gestures (edge swipe back, bottom swipe home, notification shade pull, back gesture on Android 13+). Give every gesture-only action (swipe to delete, long-press, pinch) a visible button or menu alternative.',
    category: 'mobile',
  },
  {
    id: 'mobile.offline-first',
    title: 'Offline-first data',
    prompt:
      'Design offline first: read from a local store (SQLite, Room, Core Data, SwiftData, Realm, WatermelonDB, Drift), queue writes while disconnected, and sync in the background when connectivity returns. Every screen must render something useful with no network.',
    category: 'mobile',
  },
  {
    id: 'mobile.sync-conflict-strategy',
    title: 'Explicit sync conflict rules',
    prompt:
      'Choose and document the conflict strategy for synced data (last-write-wins with server timestamps, per-field merge, or CRDTs) and surface unresolvable conflicts to the user rather than silently dropping one side. Make every sync operation idempotent with client-generated ids so a retry after a crash never duplicates records.',
    category: 'mobile',
  },
  {
    id: 'mobile.unreliable-network',
    title: 'Treat the network as unreliable',
    prompt:
      'Show connectivity state in the UI (offline banner, queued state on send) and treat "connected" as unreliable: time out requests after a few seconds, retry with exponential backoff, and never block the UI thread or a screen transition on a network call.',
    category: 'mobile',
  },
  {
    id: 'mobile.background-execution-limits',
    title: 'Assume the OS kills you',
    prompt:
      'Assume the OS can suspend or kill the app at any moment: persist critical state on every background transition, schedule deferred work through BGTaskScheduler or WorkManager instead of timers or long-lived processes, and make background tasks resumable and short.',
    category: 'mobile',
  },
  {
    id: 'mobile.battery-and-data-awareness',
    title: 'Battery and data awareness',
    prompt:
      'Batch network requests, honor Low Power Mode and Data Saver, defer large downloads to Wi-Fi and charging, and stop location, sensor, and polling work as soon as the app is backgrounded. Use push instead of polling for server-driven updates.',
    category: 'mobile',
  },
  {
    id: 'mobile.image-sizing-and-caching',
    title: 'Right-size and cache images',
    prompt:
      'Request images at their display size multiplied by the device pixel ratio, decode off the main thread, and use a memory plus disk cache (Kingfisher or SDWebImage, Coil or Glide, expo-image, cached_network_image). Never decode a full-resolution photo to show a thumbnail.',
    category: 'mobile',
  },
  {
    id: 'mobile.list-virtualization',
    title: 'Recycle long lists',
    prompt:
      'Render long lists with a recycling or virtualized list (UICollectionView, RecyclerView, LazyColumn, FlatList or FlashList, ListView.builder), give rows stable keys and fixed or estimated heights, and keep row components cheap, memoized, and free of inline closures.',
    category: 'mobile',
  },
  {
    id: 'mobile.sixty-fps-main-thread',
    title: 'Keep the main thread free',
    prompt:
      'Move JSON parsing, image decoding, database queries, and crypto off the UI thread and budget 16 ms per frame (8 ms on 120 Hz displays). Profile with Xcode Instruments, Android Profiler, or Flutter DevTools on a real device before and after any performance change.',
    category: 'mobile',
  },
  {
    id: 'mobile.react-native-performance',
    title: 'React Native performance rules',
    prompt:
      'In React Native, run animations on the UI thread (Reanimated, or Animated with useNativeDriver), memoize renderItem and callbacks, avoid inline styles and anonymous functions in list rows, and keep bridge or JSI traffic out of hot paths. Enable Hermes and the New Architecture.',
    category: 'mobile',
  },
  {
    id: 'mobile.flutter-performance',
    title: 'Flutter performance rules',
    prompt:
      'In Flutter, use const constructors, keep build() methods pure and small, split widgets so setState rebuilds the smallest subtree, wrap expensive stable regions in RepaintBoundary, and measure only in profile mode, never in debug mode.',
    category: 'mobile',
  },
  {
    id: 'mobile.platform-branches-isolated',
    title: 'Isolate platform branches',
    prompt:
      'In cross-platform code, confine Platform.OS or defaultTargetPlatform checks to a few adapter modules (theme, navigation, permissions, haptics) rather than scattering conditionals through feature code. Keep native modules thin and typed.',
    category: 'mobile',
  },
  {
    id: 'mobile.deep-and-universal-links',
    title: 'Deep and universal links',
    prompt:
      'Support deep links to every meaningful screen using Universal Links (apple-app-site-association) and Android App Links (assetlinks.json), not only custom URL schemes. Handle links on cold start, warm start, and when logged out by deferring the link and continuing after login.',
    category: 'mobile',
  },
  {
    id: 'mobile.push-notification-etiquette',
    title: 'Push notification etiquette',
    prompt:
      'Ask for notification permission only after the user has seen the value, never on first launch. Every push must be actionable, deep-link to the exact relevant screen, respect quiet hours, and belong to a channel or category the user can disable independently. No marketing pushes to users who did not opt in.',
    category: 'mobile',
  },
  {
    id: 'mobile.permissions-in-context',
    title: 'Permissions in context',
    prompt:
      'Request camera, location, contacts, and photo permissions at the moment the feature needs them, preceded by a short explanation of why. Ask for the narrowest scope (approximate location, when-in-use, limited photo library) and handle denial gracefully with a path to Settings.',
    category: 'mobile',
  },
  {
    id: 'mobile.biometric-auth',
    title: 'Biometrics as a convenience layer',
    prompt:
      'Offer Face ID, Touch ID, or BiometricPrompt as a convenience unlock over a real credential stored in the Keychain or Android Keystore; never treat a biometric success alone as authentication with the server. Always provide a passcode fallback and re-authenticate before sensitive actions.',
    category: 'mobile',
  },
  {
    id: 'mobile.secure-on-device-storage',
    title: 'Secure on-device storage',
    prompt:
      'Store tokens, keys, and secrets in the iOS Keychain or Android Keystore / EncryptedSharedPreferences, never in AsyncStorage, SharedPreferences, UserDefaults, or plain files. Clear them on logout and set the right Keychain accessibility class so they are not backed up or readable when the device is locked.',
    category: 'mobile',
  },
  {
    id: 'mobile.keyboard-avoidance',
    title: 'Keyboard avoidance',
    prompt:
      'Keep the focused input and the submit button visible when the keyboard opens using keyboard-aware scroll views or IME insets, set the correct keyboard type and return key for each field, and dismiss the keyboard on scroll or tap outside.',
    category: 'mobile',
  },
  {
    id: 'mobile.autofill-hints',
    title: 'Autofill and content types',
    prompt:
      'Set textContentType (iOS) and autofillHints (Android) on every credential and personal-data field (username, password, new password, one-time code, email, address) so password managers and OS autofill work, and support system one-time-code autofill from SMS.',
    category: 'mobile',
  },
  {
    id: 'mobile.dynamic-type-scaling',
    title: 'Dynamic Type and font scaling',
    prompt:
      'Support Dynamic Type and Android font scaling up to 200 percent: use scalable text styles, never fixed heights on text containers, allow wrapping over truncation, and test at the largest accessibility text sizes so no label is clipped.',
    category: 'mobile',
  },
  {
    id: 'mobile.voiceover-talkback',
    title: 'VoiceOver and TalkBack labels',
    prompt:
      'Give every image, icon button, and custom control a short accessibility label, and give stateful controls a role or trait and a value; group related elements into one focusable unit. Test each screen by swiping through it with VoiceOver or TalkBack enabled and fix anything announced as "button" or "image" without a name.',
    category: 'mobile',
  },
  {
    id: 'mobile.system-appearance',
    title: 'Follow system appearance',
    prompt:
      'Follow the system light/dark setting by default and use semantic system colors and appearance-aware assets (asset catalog variants, Material color roles) so every screen, image, and status bar adapts. Never hard-code white backgrounds or black text.',
    category: 'mobile',
  },
  {
    id: 'mobile.localization-resilient-layout',
    title: 'Translation-proof layouts',
    prompt:
      'Build layouts that survive translation: no fixed-width labels, wrap before truncating, ellipsize the least important part, mirror layouts and icons for right-to-left locales, and test on device with pseudo-localized strings 30 to 50 percent longer than English.',
    category: 'mobile',
  },
  {
    id: 'mobile.app-size',
    title: 'Keep install size small',
    prompt:
      'Enable App Thinning and Android App Bundles, prefer SF Symbols, Material icons, or vector assets over PNG sets, compress and lazy-load large media, strip unused locales and architectures, and check the download size delta on every release.',
    category: 'mobile',
  },
  {
    id: 'mobile.crash-reporting',
    title: 'Crash reporting with symbols',
    prompt:
      'Wire a crash reporter (Crashlytics, Sentry) with dSYM and ProGuard/R8 mapping upload in the release pipeline, tag reports with app version, build, OS, and device, and treat crash-free users below 99.5 percent as a blocker for the next rollout stage.',
    category: 'mobile',
  },
  {
    id: 'mobile.store-review-guidelines',
    title: 'Check store guidelines early',
    prompt:
      'Before building a feature, check it against App Store Review Guidelines and Google Play policy: in-app purchase for digital goods, in-app account deletion, accurate privacy labels and Data safety form, Sign in with Apple when other third-party logins exist, App Tracking Transparency before tracking, and no hidden or undocumented behavior.',
    category: 'mobile',
  },
  {
    id: 'mobile.versioning-and-forced-update',
    title: 'Versioning and forced updates',
    prompt:
      'Use a semantic marketing version plus a monotonically increasing build number, ship a remote minimum-supported-version check, and show a blocking update screen only for truly breaking versions with a soft prompt otherwise. Keep the backend compatible with at least the two previous app versions because users update slowly.',
    category: 'mobile',
  },
  {
    id: 'mobile.staged-rollouts',
    title: 'Staged rollouts',
    prompt:
      'Release through TestFlight or internal testing first, then a phased release or staged rollout starting at 1 to 5 percent, and gate each step on crash-free rate and key metrics. Keep the ability to halt a rollout and to disable risky features remotely with a flag.',
    category: 'mobile',
  },
  {
    id: 'mobile.tablets-and-foldables',
    title: 'Adaptive layouts for large screens',
    prompt:
      'Adapt to tablets, foldables, and large phones with size classes or window size classes: show master-detail or multi-column layouts instead of stretched phone screens, handle hinge and posture changes, and never hard-code a single screen width.',
    category: 'mobile',
  },
  {
    id: 'mobile.orientation-and-state',
    title: 'Rotation preserves state',
    prompt:
      'Support both orientations unless the product truly requires one, and preserve navigation, scroll, and form state across rotation and configuration changes (ViewModel and saved state, state outside the view hierarchy) so the screen reflows instead of restarting.',
    category: 'mobile',
  },
  {
    id: 'mobile.lifecycle-and-restoration',
    title: 'Lifecycle and state restoration',
    prompt:
      'Handle the full app lifecycle: save and restore navigation and in-progress input when the process is killed in the background, resume interrupted uploads, and refresh stale data on foreground with a cooldown rather than on every resume.',
    category: 'mobile',
  },
  {
    id: 'mobile.haptics-sparingly',
    title: 'Haptics sparingly',
    prompt:
      'Use platform haptics (UIFeedbackGenerator, HapticFeedback, View.performHapticFeedback) only to confirm meaningful actions and state changes such as success, warning, or selection change, never on every tap, and respect the system haptics setting.',
    category: 'mobile',
  },
  {
    id: 'mobile.test-on-real-devices',
    title: 'Test on real low-end devices',
    prompt:
      'Test on a real low-end Android device and the oldest supported iPhone, not only simulators, with throttled network and low memory. Simulators hide GPU, thermal throttling, memory pressure, and permission dialogs that differ in production.',
    category: 'mobile',
  },
]
