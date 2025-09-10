# Custom Overlays

The Custom Overlay feature allows you to display interactive HTML content over the video player at specific times or on demand. Typical use cases include:

- Quizzes  
- Polls / Voting  
- Feedback forms  
- Call-to-action buttons  
- Announcements / Informational content  

Overlays can appear automatically at a timestamp or be triggered programmatically via `player.showOverlay()`.

### Overlay Configuration

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `id` | string | Yes | Unique identifier for the overlay |
| `contentHtml` | string | No | HTML content to display in the overlay |
| `showAt` | number | No | Video timestamp (seconds) to show overlay |
| `hideAt` | number | No | Video timestamp (seconds) to hide overlay |
| `className` | string | No | CSS class name for custom styling |
| `verticalAlign` | 'top' \| 'center' \| 'bottom' | No | Vertical position (default: 'center') |
| `horizontalAlign` | 'left' \| 'center' \| 'right' | No | Horizontal position (default: 'center') |

**Default behavior**  
- If `showAt` is not set, the overlay appears immediately.  
- If `hideAt` is not set, it stays until user interaction.  
- If `className` is not set, default styling is applied.  
- Alignment defaults to center.

### Methods

**showOverlay**
Displays an overlay over the video player.

```js
player.showOverlay({
  id: 'quiz-overlay',
  contentHtml: '<div>Content here</div>',
  showAt: 30,
  hideAt: 60,
  className: 'custom-overlay'
});
````

### Events

**onOverlayShow**

Triggered when an overlay becomes visible.

```js
player.on('onOverlayShow', id => {
  console.log('Overlay shown:', id);
});
```

**onOverlayHide**

Triggered when an overlay is hidden or dismissed.

```js
player.on('onOverlayHide', id => {
  console.log('Overlay hidden:', id);
});
```

**overlayAction**

Triggered when a user interacts with elements inside an overlay (buttons, form submissions, etc.).

```js
player.on('overlayAction', data => {
  console.log('Button clicked:', data.value, 'in overlay:', data.id);
});
```

**Event Data**

```js
{
  type: 'overlayAction',
  id: overlayId,
  value: buttonValue
}
```

### Styling

Default overlays cover the full video and center the content. You can customize appearance using `className`.

```css
.quiz-overlay {
  background: rgba(0,0,0,0.8);
  color: white;
  padding: 20px;
  border-radius: 10px;
}

.cta-overlay button {
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
}

.poll-overlay label {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  background: #f0f0f0;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}
```

1. Use unique overlay IDs to prevent conflicts.
2. Use `data-value` attributes on buttons for easy event handling.
3. Test timing (`showAt` / `hideAt`) to ensure good UX.
4. Keep content concise and mobile-friendly.
5. Ensure accessibility: proper contrast, keyboard navigation.


For detailed examples of quizzes, polls, feedback forms, and announcements with custom styling, check:
[Player Overlay Examples](https://github.com/testpress/player-overlay-examples)
