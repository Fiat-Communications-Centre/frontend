/**
 * app.js - Vanilla JavaScript Application
 * Handles page functionality, API calls using Fetch API, and dynamic content rendering
 * Created: 2025-12-17 11:27:32 UTC
 */

// ============================================================================
// Configuration and Constants
// ============================================================================

const API_CONFIG = {
  baseURL: process.env.API_URL || 'http://localhost:3000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
};

const SELECTORS = {
  app: '#app',
  loader: '.loader',
  errorContainer: '.error-container',
  contentContainer: '.content-container',
  navMenu: '.nav-menu',
  navItems: '.nav-item',
  pageTitle: '.page-title'
};

// ============================================================================
// State Management
// ============================================================================

const AppState = {
  currentPage: 'home',
  isLoading: false,
  error: null,
  data: {},
  
  setState(newState) {
    Object.assign(this, newState);
    this.notifyListeners();
  },
  
  listeners: [],
  
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  },
  
  notifyListeners() {
    this.listeners.forEach(listener => listener(this));
  }
};

// ============================================================================
// API Service
// ============================================================================

class APIService {
  constructor(config = API_CONFIG) {
    this.baseURL = config.baseURL;
    this.timeout = config.timeout;
    this.headers = config.headers;
  }

  /**
   * Perform a fetch request with timeout and error handling
   */
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const fetchOptions = {
      method: options.method || 'GET',
      headers: { ...this.headers, ...options.headers },
      signal: AbortSignal.timeout(this.timeout)
    };

    if (options.body) {
      fetchOptions.body = JSON.stringify(options.body);
    }

    try {
      console.log(`[API] ${fetchOptions.method} ${url}`);
      const response = await fetch(url, fetchOptions);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new APIError(
          errorData.message || `HTTP ${response.status}`,
          response.status,
          errorData
        );
      }

      const data = await response.json();
      console.log(`[API] Success:`, data);
      return { success: true, data };
    } catch (error) {
      console.error(`[API] Error:`, error);
      return { success: false, error: this.normalizeError(error) };
    }
  }

  /**
   * GET request
   */
  async get(endpoint, options = {}) {
    return this.request(endpoint, { method: 'GET', ...options });
  }

  /**
   * POST request
   */
  async post(endpoint, body, options = {}) {
    return this.request(endpoint, { method: 'POST', body, ...options });
  }

  /**
   * PUT request
   */
  async put(endpoint, body, options = {}) {
    return this.request(endpoint, { method: 'PUT', body, ...options });
  }

  /**
   * DELETE request
   */
  async delete(endpoint, options = {}) {
    return this.request(endpoint, { method: 'DELETE', ...options });
  }

  /**
   * Normalize errors for consistent handling
   */
  normalizeError(error) {
    if (error instanceof APIError) {
      return error;
    }
    if (error.name === 'AbortError') {
      return new APIError('Request timeout', 408);
    }
    if (error instanceof TypeError) {
      return new APIError('Network error', 0);
    }
    return new APIError(error.message || 'Unknown error', 500);
  }
}

/**
 * Custom API Error class
 */
class APIError extends Error {
  constructor(message, status = 500, data = {}) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.data = data;
  }
}

// ============================================================================
// DOM Utilities
// ============================================================================

class DOMUtil {
  /**
   * Query single element
   */
  static $(selector, parent = document) {
    return parent.querySelector(selector);
  }

  /**
   * Query multiple elements
   */
  static $$(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
  }

  /**
   * Create element with attributes
   */
  static createElement(tag, attributes = {}, innerHTML = '') {
    const element = document.createElement(tag);
    
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'class') {
        element.className = value;
      } else if (key === 'style') {
        Object.assign(element.style, value);
      } else if (key.startsWith('data-')) {
        element.dataset[key.replace('data-', '')] = value;
      } else {
        element.setAttribute(key, value);
      }
    });

    if (innerHTML) {
      element.innerHTML = innerHTML;
    }

    return element;
  }

  /**
   * Add event listener with automatic cleanup
   */
  static on(element, event, handler, options = {}) {
    element.addEventListener(event, handler, options);
    return () => element.removeEventListener(event, handler, options);
  }

  /**
   * Delegate event handling
   */
  static delegate(element, selector, event, handler) {
    return this.on(element, event, (e) => {
      const target = e.target.closest(selector);
      if (target) {
        handler.call(target, e);
      }
    });
  }

  /**
   * Add class
   */
  static addClass(element, className) {
    element.classList.add(...className.split(' ').filter(Boolean));
  }

  /**
   * Remove class
   */
  static removeClass(element, className) {
    element.classList.remove(...className.split(' ').filter(Boolean));
  }

  /**
   * Toggle class
   */
  static toggleClass(element, className, force) {
    element.classList.toggle(className, force);
  }

  /**
   * Set multiple attributes
   */
  static setAttributes(element, attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  /**
   * Remove element
   */
  static remove(element) {
    element.remove();
  }

  /**
   * Show/hide element
   */
  static show(element) {
    element.style.display = '';
  }

  static hide(element) {
    element.style.display = 'none';
  }
}

// ============================================================================
// Page Renderer
// ============================================================================

class PageRenderer {
  /**
   * Render loading state
   */
  static renderLoading(container = SELECTORS.contentContainer) {
    const loader = DOMUtil.createElement('div', { class: 'loading-spinner' });
    loader.innerHTML = `
      <div class="spinner"></div>
      <p>Loading...</p>
    `;
    
    const element = DOMUtil.$(container);
    if (element) {
      element.innerHTML = '';
      element.appendChild(loader);
    }
  }

  /**
   * Render error state
   */
  static renderError(error, container = SELECTORS.contentContainer) {
    const errorDiv = DOMUtil.createElement('div', { class: 'error-message' });
    errorDiv.innerHTML = `
      <div class="error-icon">⚠️</div>
      <h2>Error</h2>
      <p>${this.escapeHTML(error.message || 'An unexpected error occurred')}</p>
      <button class="btn btn-primary retry-btn">Retry</button>
    `;
    
    const element = DOMUtil.$(container);
    if (element) {
      element.innerHTML = '';
      element.appendChild(errorDiv);
    }
  }

  /**
   * Render list of items
   */
  static renderList(items, template, container = SELECTORS.contentContainer) {
    if (!items || items.length === 0) {
      const empty = DOMUtil.createElement('div', { class: 'empty-state' });
      empty.innerHTML = '<p>No items found</p>';
      const element = DOMUtil.$(container);
      if (element) {
        element.innerHTML = '';
        element.appendChild(empty);
      }
      return;
    }

    const listContainer = DOMUtil.createElement('div', { class: 'list-container' });
    items.forEach(item => {
      const itemElement = template(item);
      listContainer.appendChild(itemElement);
    });

    const element = DOMUtil.$(container);
    if (element) {
      element.innerHTML = '';
      element.appendChild(listContainer);
    }
  }

  /**
   * Render single item
   */
  static renderItem(item, template, container = SELECTORS.contentContainer) {
    const element = DOMUtil.$(container);
    if (element) {
      element.innerHTML = '';
      element.appendChild(template(item));
    }
  }

  /**
   * Escape HTML to prevent XSS
   */
  static escapeHTML(text) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
  }
}

// ============================================================================
// Router
// ============================================================================

class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = null;
    this.init();
  }

  /**
   * Register route handler
   */
  register(path, handler) {
    this.routes[path] = handler;
  }

  /**
   * Navigate to route
   */
  async navigate(path) {
    const handler = this.routes[path];
    if (!handler) {
      console.warn(`Route not found: ${path}`);
      return;
    }

    this.currentRoute = path;
    AppState.setState({ currentPage: path });
    
    try {
      await handler();
    } catch (error) {
      console.error(`Route handler error for ${path}:`, error);
      PageRenderer.renderError(error);
    }
  }

  /**
   * Initialize router with popstate listener
   */
  init() {
    window.addEventListener('popstate', (e) => {
      const path = e.state?.path || '/';
      this.navigate(path);
    });
  }

  /**
   * Push new state to history
   */
  push(path) {
    window.history.pushState({ path }, '', path);
    this.navigate(path);
  }
}

// ============================================================================
// Application Controller
// ============================================================================

class Application {
  constructor() {
    this.api = new APIService();
    this.router = new Router();
    this.setupRoutes();
    this.setupEventListeners();
    this.init();
  }

  /**
   * Setup application routes
   */
  setupRoutes() {
    this.router.register('/', () => this.loadHome());
    this.router.register('/items', () => this.loadItems());
    this.router.register('/item/:id', (id) => this.loadItemDetail(id));
    this.router.register('/about', () => this.loadAbout());
  }

  /**
   * Setup global event listeners
   */
  setupEventListeners() {
    // Navigation menu
    const navContainer = DOMUtil.$('[data-nav]');
    if (navContainer) {
      DOMUtil.delegate(navContainer, 'a', 'click', (e) => {
        e.preventDefault();
        const path = e.currentTarget.getAttribute('href');
        this.router.push(path);
      });
    }

    // Error retry button
    DOMUtil.delegate(document, '.retry-btn', 'click', () => {
      if (this.router.currentRoute) {
        this.router.navigate(this.router.currentRoute);
      }
    });

    // Subscribe to state changes
    AppState.subscribe((state) => {
      console.log('[State Update]', state);
      this.updateUI(state);
    });
  }

  /**
   * Initialize application
   */
  init() {
    console.log('[App] Initializing application...');
    const initialPath = window.location.pathname || '/';
    this.router.navigate(initialPath);
  }

  /**
   * Load home page
   */
  async loadHome() {
    PageRenderer.renderLoading();
    AppState.setState({ isLoading: true });

    const result = await this.api.get('/home');

    if (!result.success) {
      PageRenderer.renderError(result.error);
      AppState.setState({ isLoading: false, error: result.error });
      return;
    }

    const html = `
      <div class="home-page">
        <h1>Welcome to Fiat Communications Centre</h1>
        <p class="subtitle">Manage your communications efficiently</p>
        <button class="btn btn-primary" data-action="browse-items">
          Browse Items
        </button>
      </div>
    `;

    const element = DOMUtil.$(SELECTORS.contentContainer);
    if (element) {
      element.innerHTML = html;
    }

    AppState.setState({ isLoading: false, data: result.data });
  }

  /**
   * Load items list
   */
  async loadItems() {
    PageRenderer.renderLoading();
    AppState.setState({ isLoading: true });

    const result = await this.api.get('/items');

    if (!result.success) {
      PageRenderer.renderError(result.error);
      AppState.setState({ isLoading: false, error: result.error });
      return;
    }

    const itemTemplate = (item) => {
      return DOMUtil.createElement('div', { class: 'item-card' }, `
        <h3>${PageRenderer.escapeHTML(item.name || 'Unnamed')}</h3>
        <p>${PageRenderer.escapeHTML(item.description || 'No description')}</p>
        <a href="/item/${item.id}" class="btn btn-secondary">View Details</a>
      `);
    };

    PageRenderer.renderList(result.data.items || [], itemTemplate);
    AppState.setState({ isLoading: false, data: result.data });
  }

  /**
   * Load item detail
   */
  async loadItemDetail(id) {
    PageRenderer.renderLoading();
    AppState.setState({ isLoading: true });

    const result = await this.api.get(`/items/${id}`);

    if (!result.success) {
      PageRenderer.renderError(result.error);
      AppState.setState({ isLoading: false, error: result.error });
      return;
    }

    const item = result.data.item;
    const html = `
      <div class="item-detail">
        <a href="/items" class="btn btn-secondary">← Back to Items</a>
        <h1>${PageRenderer.escapeHTML(item.name || 'Unnamed')}</h1>
        <p class="description">${PageRenderer.escapeHTML(item.description || '')}</p>
        <div class="details-grid">
          <div><strong>ID:</strong> ${PageRenderer.escapeHTML(item.id)}</div>
          <div><strong>Status:</strong> ${PageRenderer.escapeHTML(item.status || 'Unknown')}</div>
          <div><strong>Created:</strong> ${PageRenderer.escapeHTML(item.createdAt || 'N/A')}</div>
        </div>
      </div>
    `;

    const element = DOMUtil.$(SELECTORS.contentContainer);
    if (element) {
      element.innerHTML = html;
    }

    AppState.setState({ isLoading: false, data: result.data });
  }

  /**
   * Load about page
   */
  async loadAbout() {
    const html = `
      <div class="about-page">
        <h1>About</h1>
        <p>Fiat Communications Centre - Frontend Application</p>
        <p>Built with vanilla JavaScript and modern web APIs.</p>
      </div>
    `;

    const element = DOMUtil.$(SELECTORS.contentContainer);
    if (element) {
      element.innerHTML = html;
    }

    AppState.setState({ isLoading: false });
  }

  /**
   * Update UI based on state changes
   */
  updateUI(state) {
    // Update loading indicator
    const loader = DOMUtil.$(SELECTORS.loader);
    if (loader) {
      DOMUtil.toggleClass(loader, 'active', state.isLoading);
    }

    // Update active navigation item
    const navItems = DOMUtil.$$(SELECTORS.navItems);
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      const isActive = href === state.currentPage;
      DOMUtil.toggleClass(item, 'active', isActive);
    });
  }
}

// ============================================================================
// Initialization
// ============================================================================

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new Application();
  console.log('[App] Application initialized successfully');
});

// Handle global errors
window.addEventListener('error', (event) => {
  console.error('[Global Error]', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('[Unhandled Rejection]', event.reason);
});

// Export for testing and external use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Application,
    APIService,
    Router,
    DOMUtil,
    PageRenderer,
    AppState
  };
}
