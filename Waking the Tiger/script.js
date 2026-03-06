// Card data from "Waking the Tiger: Healing Trauma"
const cards = [
    // CORE CONCEPTS
    {
        title: "Somatic Experiencing",
        type: "concept",
        category: "Core Framework",
        description: "A body-centered approach to healing trauma rooted in understanding physiological processes.",
        keyPoints: [
            "Trauma is not primarily psychological but an incomplete physiological response",
            "Works with the 'felt sense' - the body's internal awareness",
            "Focuses on instinctual responses rather than reliving traumatic memories",
            "Natural, gentle process of completing defensive responses"
        ],
        practice: "Begin by simply noticing sensations in your body without trying to change them.",
        audioFile: "Script 1- Somatic Experiencing.mp3",
        duration: "1:30"
    },
    {
        title: "The Felt Sense",
        type: "concept",
        category: "Core Framework",
        description: "A physical, bodily awareness of a situation - not mental but sensational.",
        keyPoints: [
            "A complex integration of internal sensations and responses",
            "The medium through which we experience ourselves as living organisms",
            "Essential for accessing healing capacities",
            "Different from emotions - it's the raw sensations underneath"
        ],
        practice: "Ask yourself: 'How do I know I feel this way?' Notice the sensations that give you this information.",
        audioFile: "Script 2- The Felt Sense .mp3",
        duration: "2:15"
    },
    {
        title: "The Immobility Response",
        type: "concept",
        category: "Core Framework",
        description: "The freeze/collapse response when facing inescapable threat - the core mechanism of trauma.",
        keyPoints: [
            "One of three survival responses: fight, flight, or freeze",
            "Occurs when organism perceives threat as inescapable",
            "Animals naturally discharge this through trembling and shaking",
            "Humans suppress this response, leaving energy 'bound' in the nervous system"
        ],
        practice: "Notice when you feel 'stuck' or frozen. This is your body's protective response.",
        audioFile: "Script 3- The Immobility Response.mp3",
        duration: "1:45"
    },
    {
        title: "Energy Model of Trauma",
        type: "concept",
        category: "Core Framework",
        description: "Trauma creates a 'frozen residue of energy' that must be discharged for healing.",
        keyPoints: [
            "Like a car with accelerator floored and brakes engaged simultaneously",
            "This energy must be discharged for healing to occur",
            "Animals naturally discharge through movement and trembling",
            "Symptoms are the body's way of containing undischarged energy"
        ],
        practice: "Think of healing as releasing stored energy, not fixing what's broken.",
        audioFile: "Script 4- Energy Model of Trauma.mp3",
        duration: "1:45"
    },

    // HEALING PRINCIPLES
    {
        title: "The Thawing Process",
        type: "principle",
        category: "Healing Process",
        description: "Gradual completion of interrupted physiological responses.",
        keyPoints: [
            "Uncoupling immobility from fear",
            "Restoring access to natural survival responses",
            "Acts must be carried through to their completion",
            "Happens at the body's own pace, not forced"
        ],
        practice: "Allow small movements and sensations to complete naturally. Don't rush the process.",
        audioFile: "Script 5- The Thawing Process.mp3",
        duration: "1:30"
    },
    {
        title: "Resources and Resilience",
        type: "principle",
        category: "Healing Process",
        description: "Building internal and external support to restore capacity to respond to threats.",
        keyPoints: [
            "Identifying and activating personal resources",
            "Building confidence in ability to respond to threats",
            "Grounding through connection to body sensations",
            "Developing 'springiness' - the capacity to yield and recover"
        ],
        practice: "Notice what makes you feel supported, safe, or strong. Build awareness of these resources.",
        audioFile: "Script 6- Resources and Resilience .mp3",
        duration: "1:45"
    },
    {
        title: "Renegotiation",
        type: "principle",
        category: "Healing Process",
        description: "Completing unfinished responses in present-time experience.",
        keyPoints: [
            "Gradually building arousal while increasing resources",
            "Separating excitement from fear and anxiety",
            "Moving from helplessness to agency",
            "Working with sensations, not traumatic memories"
        ],
        practice: "Notice impulses to move or act. Explore completing these movements slowly and safely.",
        audioFile: "Script 7- Renegotiation.mp3",
        duration: "1:50"
    },
    {
        title: "What Animals Teach Us",
        type: "principle",
        category: "Healing Process",
        description: "Wild animals naturally discharge trauma energy and don't develop chronic symptoms.",
        keyPoints: [
            "Animals complete their survival responses fully",
            "They discharge energy through trembling and shaking",
            "They don't develop chronic trauma symptoms",
            "Humans override instinctual responses with rational thought"
        ],
        practice: "Allow yourself to tremor, shake, or move instinctually when safe. Trust your body's wisdom.",
        audioFile: "Script 8- What Animals Teach Us.mp3",
        duration: "2:00"
    },

    // SYMPTOMS TO RECOGNIZE
    {
        title: "Hyperarousal",
        type: "symptom",
        category: "Trauma Symptoms",
        description: "Constant activation, inability to rest or relax, exaggerated startle response.",
        keyPoints: [
            "Nervous system stuck in 'on' position",
            "Difficulty sleeping or relaxing",
            "Jumpy, easily startled",
            "Result of undischarged fight-or-flight energy"
        ],
        practice: "Notice when you're activated. Use grounding to gently bring energy down.",
        audioFile: "Script 9- Hyperarousal.mp3",
        duration: "1:55"
    },
    {
        title: "Constriction",
        type: "symptom",
        category: "Trauma Symptoms",
        description: "Narrowed awareness, reduced capacity, limited range of responses.",
        keyPoints: [
            "Tunnel vision in awareness and perception",
            "Reduced ability to take in new information",
            "Rigid, limited behavioral patterns",
            "Protective narrowing that becomes habitual"
        ],
        practice: "Notice where you feel tight or restricted. Gently expand awareness outward.",
        audioFile: "Script 10- Constriction.mp3",
        duration: "2:15"
    },
    {
        title: "Dissociation",
        type: "symptom",
        category: "Trauma Symptoms",
        description: "Feeling disconnected from body, numbness, sense of unreality.",
        keyPoints: [
            "Feeling 'spaced out' or unreal",
            "Numbness or lack of sensation",
            "Sense of watching yourself from outside",
            "Protective disconnection from overwhelming experience"
        ],
        practice: "Use the pulsing shower exercise to gently reconnect with your body.",
        audioFile: "Script 11- Dissociation.mp3",
        duration: "2:00"
    },
    {
        title: "Helplessness",
        type: "symptom",
        category: "Trauma Symptoms",
        description: "Inability to act, frozen responses, feeling victimized.",
        keyPoints: [
            "Sense of being powerless or trapped",
            "Difficulty taking action or making decisions",
            "Feeling like a victim of circumstances",
            "Result of incomplete defensive responses"
        ],
        practice: "Start with tiny movements and choices. Build capacity gradually.",
        audioFile: "Script 12- Helplessness.mp3",
        duration: "2:30"
    },

    // EXERCISES
    {
        title: "Pulsing Shower Exercise",
        type: "exercise",
        category: "Body Awareness",
        description: "Re-establish connection with your body using gentle pulsing water.",
        keyPoints: [
            "Use pulsing shower head at cool/warm temperature for 10 minutes daily",
            "Move systematically: hands, arms, face, neck, chest, back, legs, pelvis, feet",
            "Say: 'This is my [body part], I welcome you back'",
            "Alternative: Gently slap different body parts briskly"
        ],
        practice: "Do this daily to counteract numbness and dissociation. Notice which areas feel disconnected.",
        audioFile: "Script 13- Pulsing Shower Exercise.mp3",
        duration: "2:05"
    },
    {
        title: "Picture Response Exercise",
        type: "exercise",
        category: "Body Awareness",
        description: "Learn to track body responses and develop the felt sense.",
        keyPoints: [
            "Use magazine pictures; sense your body before viewing",
            "Notice like/dislike/neutral responses to each image",
            "Ask: 'How do I KNOW this is my response?' (identify bodily sensations)",
            "Notice energy movement, direction, rhythm, temperature, location"
        ],
        practice: "Stay with sensations and observe if they change. Move through images at comfortable pace.",
        audioFile: "Script 14- Picture Response Exercise.mp3",
        duration: "2:20"
    },
    {
        title: "Photo/Memory Exercise",
        type: "exercise",
        category: "Body Awareness",
        description: "Understand emotion through bodily sensation using personal photos.",
        keyPoints: [
            "Use personal photos from meaningful periods",
            "Begin with body awareness, then view photo",
            "Ask: 'How do I know I feel this way?' (find underlying sensations)",
            "Notice: tension, energy, breathing, heartbeat, skin feeling, overall quality"
        ],
        practice: "If intensity becomes too high, shift to a pleasant memory instead. Track location and quality of sensations.",
        audioFile: "Script 15- Photo:Memory Exercise.mp3",
        duration: "2:30"
    },
    {
        title: "Grounding Exercise",
        type: "exercise",
        category: "Resource Building",
        description: "Access the resource of stability through physical connection.",
        keyPoints: [
            "Feel/touch a significant or comforting object or fabric",
            "Sense your legs, feet, connection to earth or chair",
            "Notice pressure, texture, temperature, strength",
            "Imagine roots growing from feet into ground"
        ],
        practice: "Use this when you feel scattered, anxious, or disconnected. Feel solidity and support.",
        audioFile: "Script 16- Grounding Exercise.mp3",
        duration: "2:10"
    },
    {
        title: "Orienting Response",
        type: "exercise",
        category: "Resource Building",
        description: "Reconnect with natural scanning and awareness response.",
        keyPoints: [
            "Imagine sudden movement in peripheral vision",
            "Notice automatic freezing, tension, alertness",
            "Head turns, eyes widen, muscles extend and lengthen",
            "Notice the 'what is it?' curiosity response"
        ],
        practice: "Return to relaxed state when no threat identified. Practice this natural awareness.",
        audioFile: "Script 17- Orienting Response.mp3",
        duration: "1:55"
    },
    {
        title: "Tremoring Exercise",
        type: "exercise",
        category: "Energy Discharge",
        description: "Complete natural discharge of bound energy through gentle trembling.",
        keyPoints: [
            "In safe environment, allow gentle trembling or shaking",
            "May occur spontaneously during other work",
            "Don't force or amplify; allow organism's pace",
            "Observe sensations: warmth, tingling, moisture, energy movement"
        ],
        practice: "Trust your body's natural discharge process. This is how animals release trauma.",
        audioFile: "Script 18- Tremoring Exercise.mp3",
        duration: "2:05"
    },
    {
        title: "Movement Completion",
        type: "exercise",
        category: "Energy Discharge",
        description: "Complete defensive or escape responses frozen at time of trauma.",
        keyPoints: [
            "Identify an interrupted movement or impulse from trauma",
            "Slowly explore completing that movement (e.g., running, pushing, turning)",
            "Do so within safe, resourced state",
            "Example: Slowly turning toward threat rather than away; standing rather than crouching"
        ],
        practice: "Notice sensations as completion occurs. Move slowly and stay grounded.",
        audioFile: "Script 19- Movement Completion.mp3",
        duration: "2:30"
    },

    // ADDITIONAL CORE INSIGHTS
    {
        title: "The Medusa Principle",
        type: "principle",
        category: "Healing Approach",
        description: "Don't confront trauma directly - work with reflection and sensation instead.",
        keyPoints: [
            "Direct confrontation of trauma will freeze you (like Medusa's gaze)",
            "Work with reflection in felt sense (like Perseus using a mirror)",
            "Use body sensations as portal to understanding",
            "Access instinctual resources (the 'winged horse and golden sword')"
        ],
        practice: "Approach trauma sideways through sensation, not head-on through memory.",
        audioFile: "Script 20- The Medusa Principle.mp3",
        duration: "2:00"
    },
    {
        title: "Grounding",
        type: "principle",
        category: "Healing Elements",
        description: "Connection to body and earth; rooted stability.",
        keyPoints: [
            "Physical sense of being supported by the ground",
            "Feeling your weight, solidity, and presence",
            "Essential foundation for all other work",
            "Antidote to feeling scattered or unreal"
        ],
        practice: "Feel your feet on the floor. Notice the support beneath you. Breathe.",
        audioFile: "Script 21- Grounding (Principle).mp3",
        duration: "1:50"
    },
    {
        title: "Springiness",
        type: "principle",
        category: "Healing Elements",
        description: "Dynamic resilience - the ability to yield and recover.",
        keyPoints: [
            "Not rigid strength, but flexible resilience",
            "Capacity to bend without breaking",
            "Ability to absorb impact and bounce back",
            "Quality of aliveness and responsiveness"
        ],
        practice: "Notice how you respond to challenges. Can you yield and return? Or do you stay rigid or collapse?",
        audioFile: "Script 22- Springiness.mp3",
        duration: "2:10"
    },
    {
        title: "Uncoupling",
        type: "principle",
        category: "Healing Elements",
        description: "Separating excitement from fear; joy from anxiety.",
        keyPoints: [
            "Trauma couples arousal with fear/danger",
            "Healing separates these automatic connections",
            "Allows excitement to be pleasurable again",
            "Restores capacity for joy and aliveness"
        ],
        practice: "Notice when activation arises. Is it necessarily dangerous? Can some arousal be excitement?",
        audioFile: "Script 23- Uncoupling .mp3",
        duration: "2:20"
    }
];

// State
let currentFilter = 'all';
let searchTerm = '';
let currentAudio = null;
let currentButton = null;

// Bell Shimmer Shader - WebGL prismatic green radial effect
function createBellShimmer(bellElement) {
    // Remove any existing shimmer canvas
    const existing = document.querySelector('.shimmer-canvas');
    if (existing) existing.remove();

    const canvas = document.createElement('canvas');
    canvas.className = 'shimmer-canvas';

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';
    document.body.appendChild(canvas);

    // Try webgl2 first, fall back to webgl
    const glOpts = { alpha: true, premultipliedAlpha: true };
    const gl = canvas.getContext('webgl2', glOpts) || canvas.getContext('webgl', glOpts);
    if (!gl) {
        // CSS fallback for no WebGL support
        createBellShimmerFallback(bellElement);
        canvas.remove();
        return;
    }

    const vertSrc = [
        'attribute vec2 a_position;',
        'void main() {',
        '    gl_Position = vec4(a_position, 0.0, 1.0);',
        '}'
    ].join('\n');

    const fragSrc = [
        'precision mediump float;',
        'uniform vec2 u_resolution;',
        'uniform float u_time;',
        'uniform vec2 u_bell;',
        '',
        'void main() {',
        '    vec2 uv = gl_FragCoord.xy / u_resolution;',
        '    vec2 bell = u_bell / u_resolution;',
        '',
        '    vec2 delta = uv - bell;',
        '    delta.x *= u_resolution.x / u_resolution.y;',
        '    float dist = length(delta);',
        '    float angle = atan(delta.y, delta.x);',
        '',
        '    float speed = 0.45;',
        '    float waveFront = u_time * speed;',
        '    float behindWave = smoothstep(waveFront + 0.03, waveFront - 0.25, dist);',
        '',
        '    float phase = dist * 28.0 - u_time * 14.0;',
        '    float ring1 = sin(phase) * 0.5 + 0.5;',
        '    float ring2 = sin(phase * 1.2 + 1.3) * 0.5 + 0.5;',
        '    float ring3 = sin(phase * 0.8 + 2.7) * 0.5 + 0.5;',
        '',
        '    float hue = angle * 0.4 + dist * 5.0 + u_time * 1.5;',
        '',
        '    vec3 emerald  = vec3(0.10, 0.85, 0.42);',
        '    vec3 teal     = vec3(0.05, 0.78, 0.68);',
        '    vec3 mint     = vec3(0.35, 0.95, 0.65);',
        '    vec3 jade     = vec3(0.08, 0.70, 0.48);',
        '',
        '    float t1 = sin(hue) * 0.5 + 0.5;',
        '    float t2 = sin(hue + 2.094) * 0.5 + 0.5;',
        '    float t3 = sin(hue + 4.189) * 0.5 + 0.5;',
        '',
        '    vec3 color = emerald * ring1 * t1',
        '               + teal * ring2 * t2',
        '               + mint * ring3 * t3;',
        '    color = color / (t1 + t2 + t3 + 0.001);',
        '',
        '    float sparkle = sin(dist * 120.0 + angle * 7.0 - u_time * 18.0);',
        '    sparkle = pow(max(sparkle, 0.0), 16.0);',
        '    color += sparkle * mint * 0.6;',
        '',
        '    float edgeDist = abs(dist - waveFront);',
        '    float edge = exp(-edgeDist * 25.0) * 0.8;',
        '    color += edge * mix(emerald, mint, sin(angle * 3.0 + u_time * 4.0) * 0.5 + 0.5);',
        '',
        '    float rings = ring1 * 0.45 + ring2 * 0.35 + ring3 * 0.20;',
        '    rings = pow(rings, 1.5);',
        '',
        '    float distFade = exp(-dist * 1.0);',
        '',
        '    float dur = 3.5;',
        '    float fadeIn = smoothstep(0.0, 0.15, u_time);',
        '    float fadeOut = smoothstep(dur, dur - 1.8, u_time);',
        '    float envelope = fadeIn * fadeOut;',
        '',
        '    float a = (rings * 0.7 + sparkle * 0.3 + edge * 0.5)',
        '            * behindWave * distFade * envelope * 0.30;',
        '',
        '    // Premultiplied alpha output',
        '    gl_FragColor = vec4(color * a, a);',
        '}'
    ].join('\n');

    // Compile shader helper with error logging
    function compileShader(type, src) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, src);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.warn('Bell shimmer shader compile error:', gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    const vs = compileShader(gl.VERTEX_SHADER, vertSrc);
    const fs = compileShader(gl.FRAGMENT_SHADER, fragSrc);
    if (!vs || !fs) {
        createBellShimmerFallback(bellElement);
        canvas.remove();
        return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.warn('Bell shimmer program link error:', gl.getProgramInfoLog(program));
        createBellShimmerFallback(bellElement);
        canvas.remove();
        return;
    }
    gl.useProgram(program);

    // Full-screen quad (two triangles)
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
        -1, -1,  1, -1,  -1, 1,
         1, -1,  1,  1,  -1, 1
    ]), gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uRes = gl.getUniformLocation(program, 'u_resolution');
    const uTime = gl.getUniformLocation(program, 'u_time');
    const uBell = gl.getUniformLocation(program, 'u_bell');

    // Bell center position in GL coordinates (y-flipped)
    const rect = bellElement.getBoundingClientRect();
    const bellX = (rect.left + rect.width / 2) * dpr;
    const bellY = canvas.height - (rect.top + rect.height / 2) * dpr;

    // Premultiplied alpha blending
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    const startTime = performance.now();

    function render() {
        const elapsed = (performance.now() - startTime) / 1000;

        if (elapsed > 3.5) {
            canvas.remove();
            return;
        }

        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, elapsed);
        gl.uniform2f(uBell, bellX, bellY);

        gl.drawArrays(gl.TRIANGLES, 0, 6);

        requestAnimationFrame(render);
    }

    render();
}

// CSS-only fallback when WebGL is not available
function createBellShimmerFallback(bellElement) {
    const rect = bellElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const maxRadius = Math.max(window.innerWidth, window.innerHeight) * 1.5;

    const ring = document.createElement('div');
    ring.className = 'shimmer-fallback';
    ring.style.cssText = [
        'position: fixed',
        'border-radius: 50%',
        'pointer-events: none',
        'z-index: 999',
        'left: ' + centerX + 'px',
        'top: ' + centerY + 'px',
        'width: 0',
        'height: 0',
        'transform: translate(-50%, -50%)',
        'box-shadow: 0 0 60px 30px rgba(30, 200, 120, 0.3), 0 0 120px 60px rgba(10, 180, 140, 0.15)',
        'transition: width 3s ease-out, height 3s ease-out, opacity 2.5s ease-in 1s'
    ].join(';');
    document.body.appendChild(ring);

    requestAnimationFrame(() => {
        ring.style.width = maxRadius * 2 + 'px';
        ring.style.height = maxRadius * 2 + 'px';
        ring.style.opacity = '0';
    });

    setTimeout(() => ring.remove(), 3500);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    setupEventListeners();
});

function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        renderCards();
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update filter
            currentFilter = button.dataset.filter;
            renderCards();
        });
    });

    // Bell button
    const bellButton = document.getElementById('bellButton');
    const bellAudio = new Audio('Audio Snippets/bell.mp3');
    bellButton.addEventListener('click', () => {
        bellAudio.currentTime = 0;
        bellAudio.play();
        bellButton.classList.add('ringing');
        setTimeout(() => bellButton.classList.remove('ringing'), 300);
        createBellShimmer(bellButton);
    });
}

function playAudio(audioFile, buttonElement) {
    const audioPath = `Audio Snippets/${audioFile}`;

    // If clicking the same button, toggle play/pause
    if (currentButton === buttonElement && currentAudio) {
        if (currentAudio.paused) {
            currentAudio.play();
            buttonElement.classList.add('playing');
        } else {
            currentAudio.pause();
            buttonElement.classList.remove('playing');
        }
        return;
    }

    // Stop current audio if playing a different one
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        if (currentButton) {
            currentButton.classList.remove('playing');
        }
    }

    // Play new audio
    currentAudio = new Audio(audioPath);
    currentButton = buttonElement;
    currentAudio.play();
    buttonElement.classList.add('playing');

    // Update button when audio ends
    currentAudio.addEventListener('ended', () => {
        buttonElement.classList.remove('playing');
        currentAudio = null;
        currentButton = null;
    });
}

function filterCards(cards) {
    return cards.filter(card => {
        // Filter by type
        const matchesFilter = currentFilter === 'all' || card.type === currentFilter;

        // Filter by search term
        const matchesSearch = searchTerm === '' ||
            card.title.toLowerCase().includes(searchTerm) ||
            card.description.toLowerCase().includes(searchTerm) ||
            card.keyPoints.some(point => point.toLowerCase().includes(searchTerm)) ||
            card.category.toLowerCase().includes(searchTerm);

        return matchesFilter && matchesSearch;
    });
}

function renderCards() {
    const gallery = document.getElementById('cardGallery');
    const filteredCards = filterCards(cards);

    if (filteredCards.length === 0) {
        gallery.innerHTML = '<div class="no-results">No cards found</div>';
        return;
    }

    gallery.innerHTML = filteredCards.map((card, index) => `
        <div class="card" data-type="${card.type}">
            <div class="card-gradient"></div>
            <div class="card-content">
                <div class="card-header">
                    <h2 class="card-title">${card.title}</h2>
                    <span class="card-type">${card.type}</span>
                </div>
                <div class="card-category">${card.category}</div>
                <p class="card-description">${card.description}</p>
            </div>

            ${card.audioFile ? `
                <button class="listen-btn" data-audio="${card.audioFile}" data-index="${index}">
                    <svg class="play-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    <svg class="pause-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="6" y="4" width="4" height="16"></rect>
                        <rect x="14" y="4" width="4" height="16"></rect>
                    </svg>
                    <span class="listen-text">Listen</span>
                    <span class="listen-duration">${card.duration}</span>
                </button>
            ` : ''}
        </div>
    `).join('');

    // Add click handlers for listen buttons
    document.querySelectorAll('.listen-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const audioFile = btn.dataset.audio;
            playAudio(audioFile, btn);
        });
    });
}
