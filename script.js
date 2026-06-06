// ============================================================
// DATA
// ============================================================
let currentUser = { name: 'Arjun Sharma', role: 'admin', email: 'arjun@company.com', avatar: 'A' };
let selectedRole = 'admin';
const roles = {
  admin: { name: 'Arjun Sharma', avatar: 'A', label: 'Administrator' },
  manager: { name: 'Priya Mehta', avatar: 'P', label: 'Procurement Manager' },
  officer: { name: 'Rahul Kumar', avatar: 'R', label: 'Procurement Officer' },
  vendor: { name: 'Sunita Rao', avatar: 'S', label: 'Vendor (TechMart)' }
};

const vendors = [
  { id: 1, name: 'TechMart Solutions', category: 'IT & Technology', gst: '27AABCT1234M1ZB', contact: 'Vijay Patel', email: 'vijay@techmart.com', phone: '+91 98765 43210', city: 'Mumbai', status: 'Active', rating: 4.8, orders: 24, bg: '#1A3C5E' },
  { id: 2, name: 'Global Office Co.', category: 'Office Supplies', gst: '09AABCG5678P1Z2', contact: 'Anita Sharma', email: 'anita@globaloffice.com', phone: '+91 97654 32109', city: 'Delhi', status: 'Active', rating: 4.6, orders: 18, bg: '#1A7A4A' },
  { id: 3, name: 'CloudSoft Solutions', category: 'Software', gst: '06AABCC9012Q1Z5', contact: 'Ravi Kumar', email: 'ravi@cloudsoft.com', phone: '+91 96543 21098', city: 'Bangalore', status: 'Active', rating: 4.5, orders: 12, bg: '#7B1FA2' },
  { id: 4, name: 'Rapid Logistics Ltd', category: 'Logistics', gst: '29AABCR3456R1ZT', contact: 'Deepa Nair', email: 'deepa@rapidlog.com', phone: '+91 95432 10987', city: 'Chennai', status: 'Active', rating: 4.3, orders: 31, bg: '#C0392B' },
  { id: 5, name: 'Prime Furniture Hub', category: 'Furniture', gst: '24AABCP7890S1ZX', contact: 'Mohan Das', email: 'mohan@primefurni.com', phone: '+91 94321 09876', city: 'Ahmedabad', status: 'Active', rating: 4.7, orders: 8, bg: '#E8A020' },
  { id: 6, name: 'OfficeZone India', category: 'Office Supplies', gst: '33AABCO2345T1ZL', contact: 'Preethi Raj', email: 'preethi@officezone.com', phone: '+91 93210 98765', city: 'Hyderabad', status: 'Under Review', rating: 4.1, orders: 5, bg: '#0D6EFD' },
];

const rfqs = [
  { id: 'RFQ-2024-018', title: 'Office Furniture Q4', category: 'Furniture', status: 'Active', deadline: '2024-12-28', vendors: 4, quotations: 3, budget: '₹8,50,000', items: 6 },
  { id: 'RFQ-2024-017', title: 'IT Hardware Refresh', category: 'IT & Technology', status: 'In Review', deadline: '2024-12-20', vendors: 5, quotations: 4, budget: '₹15,00,000', items: 8 },
  { id: 'RFQ-2024-016', title: 'Stationery & Office Supplies', category: 'Office Supplies', status: 'Closed', deadline: '2024-12-15', vendors: 3, quotations: 3, budget: '₹2,50,000', items: 12 },
  { id: 'RFQ-2024-015', title: 'Annual Software Licenses', category: 'Software', status: 'Draft', deadline: '2025-01-05', vendors: 2, quotations: 0, budget: '₹12,00,000', items: 4 },
  { id: 'RFQ-2024-014', title: 'Warehouse Logistics Services', category: 'Logistics', status: 'Closed', deadline: '2024-12-10', vendors: 4, quotations: 4, budget: '₹5,00,000', items: 3 },
];

const purchaseOrders = [
  { id: 'PO-2024-048', vendor: 'TechMart Solutions', rfq: 'RFQ-2024-017', amount: '₹7,67,000', date: '2024-12-16', status: 'Confirmed' },
  { id: 'PO-2024-047', vendor: 'Global Office Co.', rfq: 'RFQ-2024-016', amount: '₹2,28,000', date: '2024-12-12', status: 'Received' },
  { id: 'PO-2024-046', vendor: 'CloudSoft Solutions', rfq: 'RFQ-2024-015', amount: '₹1,18,000', date: '2024-12-10', status: 'Confirmed' },
  { id: 'PO-2024-045', vendor: 'Rapid Logistics Ltd', rfq: 'RFQ-2024-014', amount: '₹4,42,000', date: '2024-12-05', status: 'Received' },
  { id: 'PO-2024-044', vendor: 'Prime Furniture Hub', rfq: '–', amount: '₹3,15,000', date: '2024-11-28', status: 'Draft' },
];

const invoices = [
  { id: 'INV-2024-042', po: 'PO-2024-047', vendor: 'TechMart Solutions', amount: '₹1,24,500', due: '2024-12-30', status: 'Paid' },
  { id: 'INV-2024-041', po: 'PO-2024-046', vendor: 'Global Office Co.', amount: '₹68,200', due: '2025-01-10', status: 'Pending' },
  { id: 'INV-2024-040', po: 'PO-2024-045', vendor: 'CloudSoft Solutions', amount: '₹2,15,000', due: '2025-01-05', status: 'Sent' },
  { id: 'INV-2024-039', po: 'PO-2024-044', vendor: 'Rapid Logistics Ltd', amount: '₹42,800', due: '2024-12-01', status: 'Overdue' },
  { id: 'INV-2024-038', po: 'PO-2024-043', vendor: 'Prime Furniture Hub', amount: '₹3,20,000', due: '2024-12-20', status: 'Paid' },
];

const approvalRequests = [
  { id: 'APR-001', type: 'RFQ Approval', ref: 'RFQ-2024-017', title: 'IT Hardware Refresh', requester: 'Rahul Kumar', dept: 'Procurement', amount: '₹15,00,000', date: '2024-12-14', status: 'Pending', steps: [{label:'Officer',done:true,by:'Rahul Kumar',date:'Dec 14'},{label:'Dept Head',done:true,by:'Kiran Joshi',date:'Dec 15'},{label:'Manager',done:false,by:'',date:''}] },
  { id: 'APR-002', type: 'PO Approval', ref: 'PO-2024-048', title: 'TechMart Solutions – Laptops', requester: 'Rahul Kumar', dept: 'IT', amount: '₹7,67,000', date: '2024-12-15', status: 'Pending', steps: [{label:'Officer',done:true,by:'Rahul Kumar',date:'Dec 15'},{label:'Manager',done:false,by:'',date:''}] },
  { id: 'APR-003', type: 'Invoice Approval', ref: 'INV-2024-041', title: 'Global Office Co. Invoice', requester: 'Sunita Rao', dept: 'Procurement', amount: '₹68,200', date: '2024-12-16', status: 'Pending', steps: [{label:'Verifier',done:true,by:'Ravi Singh',date:'Dec 16'},{label:'Manager',done:false,by:'',date:''}] },
  { id: 'APR-004', type: 'RFQ Approval', ref: 'RFQ-2024-016', title: 'Stationery & Supplies', requester: 'Rahul Kumar', dept: 'Admin', amount: '₹2,50,000', date: '2024-12-10', status: 'Approved', steps: [{label:'Officer',done:true,by:'Rahul Kumar',date:'Dec 10'},{label:'Manager',done:true,by:'Priya Mehta',date:'Dec 11'}] },
];

const activityLogs = [
  { icon: 'fas fa-file-alt', color: 'var(--info-light)', iconColor: 'var(--info)', text: 'RFQ-2024-018 published', desc: 'Office Furniture Q4 RFQ sent to 4 vendors', time: '2 min ago' },
  { icon: 'fas fa-check-circle', color: 'var(--success-light)', iconColor: 'var(--success)', text: 'RFQ-2024-017 Approved', desc: 'Approved by Priya Mehta (Manager)', time: '18 min ago' },
  { icon: 'fas fa-file-invoice-dollar', color: '#EDE7F6', iconColor: '#6A1B9A', text: 'Invoice INV-2024-042 marked Paid', desc: 'Payment received from TechMart Solutions', time: '1 hr ago' },
  { icon: 'fas fa-building', color: 'var(--warning-light)', iconColor: 'var(--warning)', text: 'New vendor registered', desc: 'CloudSoft Solutions submitted registration', time: '3 hrs ago' },
  { icon: 'fas fa-shopping-cart', color: 'var(--success-light)', iconColor: 'var(--success)', text: 'PO-2024-048 Confirmed', desc: 'Purchase order confirmed with TechMart Solutions', time: '5 hrs ago' },
  { icon: 'fas fa-balance-scale', color: 'var(--info-light)', iconColor: 'var(--info)', text: 'Quotation comparison completed', desc: 'RFQ-2024-017 – TechMart selected as L1', time: '8 hrs ago' },
  { icon: 'fas fa-times-circle', color: 'var(--danger-light)', iconColor: 'var(--danger)', text: 'APR-005 Rejected', desc: 'Capital Equipment purchase rejected – budget exceeded', time: '1 day ago' },
];

// ============================================================
// AUTH
// ============================================================
function selectRole(el, role) {
  document.querySelectorAll('.role-option').forEach(r => r.classList.remove('selected'));
  el.classList.add('selected');
  selectedRole = role;
}
function showLogin() { document.getElementById('login-form').style.display='block'; document.getElementById('signup-form').style.display='none'; document.getElementById('forgot-form').style.display='none'; }
function showSignup() { document.getElementById('login-form').style.display='none'; document.getElementById('signup-form').style.display='block'; document.getElementById('forgot-form').style.display='none'; }
function showForgot() { document.getElementById('login-form').style.display='none'; document.getElementById('signup-form').style.display='none'; document.getElementById('forgot-form').style.display='block'; }
function doLogin() {
  const r = roles[selectedRole];
  currentUser = { name: r.name, role: selectedRole, avatar: r.avatar, label: r.label };
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('app').style.display = 'flex';
  document.getElementById('sb-avatar').textContent = r.avatar;
  document.getElementById('sb-name').textContent = r.name;
  document.getElementById('sb-role').textContent = r.label;
  document.getElementById('page-subtitle').textContent = 'Welcome back, ' + r.name;
  if (selectedRole !== 'admin') { document.querySelectorAll('.admin-only').forEach(e => e.style.display='none'); }
  renderDashboard();
  renderVendors();
  renderRFQs();
  renderPOs();
  renderInvoices();
  renderApprovals();
  renderActivityLogs();
  renderReports();
  updateInvoicePreview();
}
function doLogout() { document.getElementById('auth-screen').style.display='flex'; document.getElementById('app').style.display='none'; }

// ============================================================
// NAVIGATION
// ============================================================
const pageTitles = { dashboard:'Dashboard', vendors:'Vendor Management', rfq:'RFQ Management', quotations:'Quotation Comparison', approvals:'Approval Workflow', orders:'Purchase Orders', invoices:'Invoices', activity:'Activity Logs', reports:'Reports & Analytics', users:'User Management' };
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.sidebar-item').forEach(i => { if (i.textContent.toLowerCase().includes(page === 'rfq' ? 'rfq' : pageTitles[page].split(' ')[0].toLowerCase())) i.classList.add('active'); });
  document.getElementById('page-title').textContent = pageTitles[page] || page;
  if (page === 'quotations' && (currentUser.role === 'vendor')) document.getElementById('submit-rfq-btn').style.display = '';
}

// ============================================================
// MODALS
// ============================================================
function openModal(id) { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
function openVendorModal() { openModal('vendor-modal'); }
function openRFQModal() { openModal('rfq-modal'); renderRFQVendorList(); }
function openQuotationModal() { openModal('quotation-modal'); }
function openPOModal() { openModal('po-modal'); calcPOTotal(); }
function openInvoiceModal() { openModal('invoice-modal'); updateInvoicePreview(); }

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const months = ['Jul','Aug','Sep','Oct','Nov','Dec'];
  const vals = [18,22,15,28,24,31];
  const max = Math.max(...vals);
  let html = '';
  months.forEach((m,i) => {
    const h = Math.round((vals[i]/max)*120);
    html += `<div class="chart-bar-wrap"><div class="chart-bar-val">₹${vals[i]}L</div><div class="chart-bar" style="height:${h}px;background:${i===5?'var(--primary)':'var(--primary-light)'};opacity:${i===5?1:0.6}"></div><div class="chart-bar-label">${m}</div></div>`;
  });
  const el = document.getElementById('monthly-chart');
  if (el) el.innerHTML = html;
  const feed = document.getElementById('activity-feed');
  if (feed) {
    feed.innerHTML = activityLogs.slice(0,5).map(a => `<div class="activity-item"><div class="activity-icon" style="background:${a.color};color:${a.iconColor}"><i class="${a.icon}"></i></div><div class="activity-text"><strong>${a.text}</strong><p>${a.desc}</p></div><div class="activity-time">${a.time}</div></div>`).join('');
  }
}

// ============================================================
// VENDORS
// ============================================================
function renderVendors(list) {
  list = list || vendors;
  const grid = document.getElementById('vendor-grid');
  if (!grid) return;
  if (!list.length) { grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1"><i class="fas fa-building"></i><p>No vendors found</p></div>'; return; }
  grid.innerHTML = list.map(v => `
    <div class="vendor-card">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:12px">
        <div class="vendor-avatar" style="background:${v.bg}">${v.name.charAt(0)}</div>
        <div><div class="vendor-name">${v.name}</div><div class="vendor-category">${v.category}</div></div>
        <div style="margin-left:auto"><span class="badge badge-${v.status==='Active'?'active':v.status==='Inactive'?'inactive':'pending'}">${v.status}</span></div>
      </div>
      <div style="font-size:12px;color:var(--text3);margin-bottom:6px"><i class="fas fa-user" style="width:14px"></i> ${v.contact}</div>
      <div style="font-size:12px;color:var(--text3);margin-bottom:6px"><i class="fas fa-envelope" style="width:14px"></i> ${v.email}</div>
      <div style="font-size:12px;color:var(--text3);margin-bottom:6px"><i class="fas fa-id-card" style="width:14px"></i> GST: <span style="font-family:var(--mono)">${v.gst}</span></div>
      <div style="font-size:12px;color:var(--text3)"><i class="fas fa-map-marker-alt" style="width:14px"></i> ${v.city}</div>
      <div class="vendor-meta">
        <div class="vendor-rating"><i class="fas fa-star"></i> ${v.rating}</div>
        <div class="vendor-stat">${v.orders} orders</div>
        <div style="display:flex;gap:6px">
          <button class="btn btn-ghost btn-sm" onclick="showToast('Editing ${v.name}','info')"><i class="fas fa-edit"></i></button>
          <button class="btn btn-secondary btn-sm" onclick="openRFQModal()">Send RFQ</button>
        </div>
      </div>
    </div>`).join('');
}

function filterVendors() {
  const search = document.getElementById('vendor-search').value.toLowerCase();
  const cat = document.getElementById('vendor-cat-filter').value;
  const status = document.getElementById('vendor-status-filter').value;
  renderVendors(vendors.filter(v => {
    const matchSearch = !search || v.name.toLowerCase().includes(search) || v.gst.toLowerCase().includes(search) || v.category.toLowerCase().includes(search);
    const matchCat = !cat || v.category === cat;
    const matchStatus = !status || v.status === status;
    return matchSearch && matchCat && matchStatus;
  }));
}

function saveVendor() {
  closeModal('vendor-modal');
  showToast('Vendor registered successfully!', 'success');
}

// ============================================================
// RFQ
// ============================================================
function renderRFQs(list) {
  list = list || rfqs;
  const el = document.getElementById('rfq-list');
  if (!el) return;
  const statusClass = { Active:'active', 'In Review':'review', Closed:'approved', Draft:'draft' };
  el.innerHTML = list.map(r => `
    <div class="rfq-card">
      <div class="rfq-card-header">
        <div><div class="rfq-number">${r.id}</div><div class="rfq-title">${r.title}</div></div>
        <div style="display:flex;gap:8px;align-items:center"><span class="badge badge-${statusClass[r.status]||'pending'}">${r.status}</span><button class="btn btn-ghost btn-sm"><i class="fas fa-ellipsis-v"></i></button></div>
      </div>
      <div style="font-size:12px;color:var(--text3);margin-bottom:10px"><i class="fas fa-tag" style="margin-right:4px"></i>${r.category}</div>
      <div class="rfq-meta">
        <div class="rfq-meta-item"><label>Vendors Invited</label><span>${r.vendors}</span></div>
        <div class="rfq-meta-item"><label>Quotations</label><span>${r.quotations}</span></div>
        <div class="rfq-meta-item"><label>Budget</label><span>${r.budget}</span></div>
      </div>
      <div style="display:flex;align-items:center;justify-content:space-between;margin-top:10px">
        <div style="font-size:12px;color:var(--text3)"><i class="fas fa-calendar"></i> Deadline: <strong style="color:var(--text)">${r.deadline}</strong></div>
        <div style="display:flex;gap:8px">
          ${r.quotations > 0 ? `<button class="btn btn-secondary btn-sm" onclick="showPage('quotations');setTimeout(()=>{document.getElementById('compare-rfq-select').value='rfq-${r.id.split('-')[2]}';loadComparison()},100)">Compare Quotes</button>` : ''}
          <button class="btn btn-primary btn-sm" onclick="openRFQModal()"><i class="fas fa-edit"></i> Edit</button>
        </div>
      </div>
    </div>`).join('');
}

function filterRFQ() {
  const search = document.getElementById('rfq-search').value.toLowerCase();
  const status = document.getElementById('rfq-status-filter').value;
  renderRFQs(rfqs.filter(r => {
    const ms = !search || r.title.toLowerCase().includes(search) || r.id.toLowerCase().includes(search);
    const mst = !status || r.status.includes(status);
    return ms && mst;
  }));
}

function renderRFQVendorList() {
  const el = document.getElementById('rfq-vendor-list');
  if (!el) return;
  el.innerHTML = vendors.map(v => `
    <label class="vendor-check">
      <input type="checkbox" ${v.status==='Active'?'checked':''}> 
      <div style="flex:1"><div style="font-size:13px;font-weight:500">${v.name}</div><div style="font-size:11px;color:var(--text3)">${v.category} • ${v.city}</div></div>
      <span class="badge badge-${v.status==='Active'?'active':'pending'}">${v.status}</span>
    </label>`).join('');
}

function addRFQItem() {
  const tbody = document.getElementById('rfq-items-body');
  const tr = document.createElement('tr');
  tr.innerHTML = `<td style="padding:8px 14px"><input style="width:100%;border:1px solid var(--border);border-radius:6px;padding:6px 10px;font-size:13px;font-family:var(--font)" placeholder="Item description"></td><td style="padding:8px"><input type="number" style="width:80px;border:1px solid var(--border);border-radius:6px;padding:6px 10px;font-size:13px;font-family:var(--font);text-align:right" value="1"></td><td style="padding:8px"><select style="border:1px solid var(--border);border-radius:6px;padding:6px 8px;font-size:13px;font-family:var(--font)"><option>Units</option><option>Kg</option><option>Liters</option><option>Pieces</option></select></td><td style="padding:8px"><input type="number" style="width:120px;border:1px solid var(--border);border-radius:6px;padding:6px 10px;font-size:13px;font-family:var(--font);text-align:right" placeholder="0.00"></td><td style="padding:8px"><button class="btn btn-ghost btn-sm" style="color:var(--danger)" onclick="this.closest('tr').remove()"><i class="fas fa-trash"></i></button></td>`;
  tbody.appendChild(tr);
}

function saveRFQ() {
  closeModal('rfq-modal');
  showToast('RFQ published and sent to vendors!', 'success');
}

// ============================================================
// QUOTATION COMPARISON
// ============================================================
function loadComparison() {
  const val = document.getElementById('compare-rfq-select').value;
  const el = document.getElementById('compare-area');
  if (!val || !el) return;
  const data = {
    'rfq-017': {
      rfqTitle: 'IT Hardware Refresh (RFQ-2024-017)',
      items: ['Laptop 15" Core i7', 'Wireless Mouse', 'USB-C Hub', 'Monitor 24"'],
      vendors: [
        { name: 'TechMart Solutions', total: '₹7,67,000', delivery: '2 weeks', rating: 4.8, prices: ['₹65,000','₹1,200','₹2,800','₹18,500'], winner: true },
        { name: 'Global Office Co.', total: '₹8,42,000', delivery: '3 weeks', rating: 4.6, prices: ['₹71,000','₹1,400','₹3,200','₹20,000'], winner: false },
        { name: 'CloudSoft Solutions', total: '₹8,10,000', delivery: '2–3 weeks', rating: 4.5, prices: ['₹68,000','₹1,350','₹3,000','₹19,200'], winner: false },
        { name: 'Rapid Logistics Ltd', total: '₹9,20,000', delivery: '4 weeks', rating: 4.3, prices: ['₹78,000','₹1,500','₹3,500','₹21,000'], winner: false },
      ]
    },
    'rfq-018': {
      rfqTitle: 'Office Furniture Q4 (RFQ-2024-018)',
      items: ['Executive Desk', 'Ergonomic Chair', 'Filing Cabinet', 'Bookshelf'],
      vendors: [
        { name: 'Prime Furniture Hub', total: '₹6,85,000', delivery: '3 weeks', rating: 4.7, prices: ['₹45,000','₹28,000','₹8,500','₹6,000'], winner: true },
        { name: 'OfficeZone India', total: '₹7,10,000', delivery: '2 weeks', rating: 4.1, prices: ['₹48,000','₹29,500','₹9,000','₹6,500'], winner: false },
        { name: 'Global Office Co.', total: '₹7,50,000', delivery: '4 weeks', rating: 4.6, prices: ['₹52,000','₹30,000','₹9,500','₹7,000'], winner: false },
      ]
    }
  };
  const d = data[val];
  if (!d) return;
  const winnerIdx = d.vendors.findIndex(v => v.winner);
  let html = `
    <div style="margin-bottom:20px">
      <h3 style="font-size:16px;font-weight:600;color:var(--text);margin-bottom:4px">${d.rfqTitle}</h3>
      <p style="font-size:13px;color:var(--text3)">${d.vendors.length} quotations received • Click <strong>Select Vendor</strong> to approve a quotation</p>
    </div>
    <div style="overflow-x:auto;margin-bottom:20px">
      <table class="compare-table">
        <thead>
          <tr>
            <th>Item / Criteria</th>
            ${d.vendors.map((v,i) => `<th class="${v.winner?'winner-col':''} vendor-col"><div style="font-size:14px;font-weight:600">${v.name}</div>${v.winner?'<div class="compare-winner-badge">⭐ L1 – Best Price</div>':''}<div style="font-size:12px;color:var(--text3);margin-top:4px">★ ${v.rating}</div></th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${d.items.map((item,ii) => {
            const itemPrices = d.vendors.map(v => parseFloat(v.prices[ii].replace(/[₹,]/g,''))||0);
            const minPrice = Math.min(...itemPrices);
            return `<tr><td>${item}</td>${d.vendors.map((v,vi) => {
              const price = itemPrices[vi];
              const isLowest = price === minPrice;
              return `<td class="${isLowest?'lowest':''}">${v.prices[ii]}${isLowest?' <span style="font-size:10px;background:var(--success);color:white;padding:1px 6px;border-radius:10px;margin-left:4px">LOWEST</span>':''}</td>`;
            }).join('')}</tr>`;
          }).join('')}
          <tr style="background:var(--bg2);font-weight:700">
            <td style="font-size:14px">Total Amount</td>
            ${d.vendors.map(v => `<td class="${v.winner?'lowest':''}" style="font-size:14px">${v.total}</td>`).join('')}
          </tr>
          <tr>
            <td>Delivery Timeline</td>
            ${d.vendors.map(v => `<td>${v.delivery}</td>`).join('')}
          </tr>
          <tr>
            <td>Vendor Rating</td>
            ${d.vendors.map(v => `<td><span style="color:var(--accent)">★</span> ${v.rating}</td>`).join('')}
          </tr>
          <tr>
            <td>Action</td>
            ${d.vendors.map((v,i) => `<td><button class="btn ${v.winner?'btn-primary':'btn-secondary'} btn-sm" onclick="selectVendorForPO('${v.name}')">${v.winner?'✓ Select Vendor':'Select'}</button></td>`).join('')}
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card" style="background:var(--success-light);border-color:rgba(26,122,74,0.2)">
      <div style="display:flex;align-items:center;gap:14px">
        <i class="fas fa-lightbulb" style="font-size:24px;color:var(--success)"></i>
        <div>
          <div style="font-size:14px;font-weight:600;color:var(--success)">Recommendation: ${d.vendors[winnerIdx].name}</div>
          <div style="font-size:13px;color:var(--text2);margin-top:2px">Best overall value – lowest price (${d.vendors[winnerIdx].total}) with ${d.vendors[winnerIdx].delivery} delivery and highest rating (★ ${d.vendors[winnerIdx].rating})</div>
        </div>
        <button class="btn btn-success btn-sm" style="margin-left:auto;white-space:nowrap" onclick="selectVendorForPO('${d.vendors[winnerIdx].name}')">Proceed to PO</button>
      </div>
    </div>`;
  el.innerHTML = html;
}

function selectVendorForPO(vendor) {
  showToast(`${vendor} selected! Initiating approval workflow...`, 'success');
  setTimeout(() => showPage('approvals'), 1200);
}

// ============================================================
// APPROVALS
// ============================================================
function renderApprovals() {
  const el = document.getElementById('approval-list');
  if (!el) return;
  el.innerHTML = approvalRequests.map(req => `
    <div class="approval-card">
      <div class="approval-header">
        <div>
          <div style="font-size:11px;color:var(--text3);font-family:var(--mono);margin-bottom:4px">${req.id} • ${req.type}</div>
          <div style="font-size:16px;font-weight:600;color:var(--text);margin-bottom:4px">${req.title}</div>
          <div style="font-size:12px;color:var(--text3)">Ref: ${req.ref} • Requested by ${req.requester} (${req.dept}) • ${req.date}</div>
        </div>
        <div style="text-align:right">
          <span class="badge badge-${req.status==='Pending'?'pending':req.status==='Approved'?'approved':'rejected'}">${req.status}</span>
          <div style="font-size:15px;font-weight:700;color:var(--primary);margin-top:8px">${req.amount}</div>
        </div>
      </div>
      <div style="margin-bottom:16px">
        <div style="font-size:12px;font-weight:600;color:var(--text3);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px">Approval Progress</div>
        <div class="approval-timeline">
          ${req.steps.map((s,i) => `
            <div class="approval-step ${s.done?'done':'active'}">
              <div class="approval-step-dot">${s.done?'<i class="fas fa-check" style="font-size:8px;color:white"></i>':i+1}</div>
              <div style="font-size:13px;font-weight:500;color:var(--text)">${s.label}</div>
              ${s.done?`<div style="font-size:12px;color:var(--text3)">✓ ${s.by} – ${s.date}</div>`:`<div style="font-size:12px;color:var(--text3)">Awaiting review</div>`}
            </div>`).join('')}
        </div>
      </div>
      ${req.status === 'Pending' ? `
        <div style="display:flex;gap:10px;border-top:1px solid var(--border-light);padding-top:14px">
          <button class="btn btn-success btn-sm" onclick="triggerApproval('${req.id}','approve','${req.title}','${req.amount}')"><i class="fas fa-check"></i> Approve</button>
          <button class="btn btn-danger btn-sm" onclick="triggerApproval('${req.id}','reject','${req.title}','${req.amount}')"><i class="fas fa-times"></i> Reject</button>
          <button class="btn btn-secondary btn-sm"><i class="fas fa-eye"></i> View Details</button>
          <button class="btn btn-ghost btn-sm" style="margin-left:auto"><i class="fas fa-forward"></i> Escalate</button>
        </div>` : `<div style="border-top:1px solid var(--border-light);padding-top:14px;font-size:13px;color:var(--success);display:flex;align-items:center;gap:6px"><i class="fas fa-check-circle"></i> Approved by ${req.steps[req.steps.length-1].by}</div>`}
    </div>`).join('');
}

function triggerApproval(id, action, title, amount) {
  const modal = document.getElementById('approval-modal');
  const t = document.getElementById('approval-modal-title');
  const info = document.getElementById('approval-modal-info');
  const footer = document.getElementById('approval-modal-footer');
  t.textContent = action === 'approve' ? 'Approve Request' : 'Reject Request';
  info.innerHTML = `<strong>${title}</strong><br>Amount: ${amount}<br>Ref: ${id}`;
  footer.innerHTML = `<button class="btn btn-secondary" onclick="closeModal('approval-modal')">Cancel</button><button class="btn btn-${action==='approve'?'success':'danger'}" onclick="confirmApproval('${id}','${action}')"><i class="fas fa-${action==='approve'?'check':'times'}"></i> ${action==='approve'?'Approve':'Reject'}</button>`;
  openModal('approval-modal');
}

function confirmApproval(id, action) {
  closeModal('approval-modal');
  const req = approvalRequests.find(r => r.id === id);
  if (req) { req.status = action === 'approve' ? 'Approved' : 'Rejected'; renderApprovals(); const count = approvalRequests.filter(r => r.status === 'Pending').length; document.getElementById('approval-count').textContent = count; }
  showToast(action === 'approve' ? 'Request approved successfully!' : 'Request rejected.', action === 'approve' ? 'success' : 'error');
}

// ============================================================
// PURCHASE ORDERS
// ============================================================
function renderPOs() {
  const tbody = document.getElementById('po-table-body');
  if (!tbody) return;
  const sc = { Confirmed:'active', Received:'approved', Draft:'draft', Cancelled:'rejected' };
  tbody.innerHTML = purchaseOrders.map(po => `
    <tr>
      <td><input type="checkbox"></td>
      <td><span class="text-mono">${po.id}</span></td>
      <td><strong>${po.vendor}</strong></td>
      <td class="td-muted">${po.rfq}</td>
      <td style="font-weight:600">${po.amount}</td>
      <td class="td-muted">${po.date}</td>
      <td><span class="badge badge-${sc[po.status]||'pending'}">${po.status}</span></td>
      <td>
        <div style="display:flex;gap:6px">
          <button class="btn btn-ghost btn-sm" onclick="showToast('Viewing ${po.id}','info')"><i class="fas fa-eye"></i></button>
          <button class="btn btn-secondary btn-sm" onclick="openInvoiceModal()"><i class="fas fa-file-invoice-dollar"></i> Invoice</button>
          <button class="btn btn-ghost btn-sm"><i class="fas fa-download"></i></button>
        </div>
      </td>
    </tr>`).join('');
}

function addPOItem() {
  const tbody = document.getElementById('po-items-body');
  const tr = document.createElement('tr');
  tr.innerHTML = `<td style="padding:8px 14px"><input style="width:100%;border:1px solid var(--border);border-radius:6px;padding:6px 10px;font-size:13px;font-family:var(--font)" placeholder="Item description"></td><td style="padding:8px"><input type="number" style="width:70px;border:1px solid var(--border);border-radius:6px;padding:6px 8px;font-size:13px;font-family:var(--font);text-align:right" value="1" oninput="calcPOTotal()"></td><td style="padding:8px"><input type="number" style="width:110px;border:1px solid var(--border);border-radius:6px;padding:6px 8px;font-size:13px;font-family:var(--font);text-align:right" value="0" oninput="calcPOTotal()"></td><td style="padding:8px;font-size:13px;font-weight:600;text-align:right">₹0</td><td style="padding:8px"><button class="btn btn-ghost btn-sm" style="color:var(--danger)" onclick="this.closest('tr').remove();calcPOTotal()"><i class="fas fa-trash"></i></button></td>`;
  tbody.appendChild(tr);
}

function removePOItem(btn) { btn.closest('tr').remove(); calcPOTotal(); }

function calcPOTotal() {
  const rows = document.querySelectorAll('#po-items-body tr');
  let subtotal = 0;
  rows.forEach(row => {
    const inputs = row.querySelectorAll('input[type=number]');
    if (inputs.length >= 2) {
      const qty = parseFloat(inputs[0].value) || 0;
      const unit = parseFloat(inputs[1].value) || 0;
      const total = qty * unit;
      subtotal += total;
      const td = row.querySelectorAll('td')[3];
      if (td) td.textContent = '₹' + total.toLocaleString('en-IN');
    }
  });
  const gst = parseFloat(document.getElementById('po-gst')?.value || 18) / 100;
  const tax = subtotal * gst;
  const total = subtotal + tax;
  const fmt = n => '₹' + Math.round(n).toLocaleString('en-IN');
  document.getElementById('po-subtotal').textContent = fmt(subtotal);
  document.getElementById('po-tax').textContent = fmt(tax);
  document.getElementById('po-total').textContent = fmt(total);
}

function savePO() {
  closeModal('po-modal');
  showToast('Purchase Order PO-2024-049 created!', 'success');
}

// ============================================================
// INVOICES
// ============================================================
function renderInvoices() {
  const tbody = document.getElementById('invoice-table-body');
  if (!tbody) return;
  const sc = { Paid:'approved', Pending:'pending', Sent:'sent', Overdue:'overdue', Draft:'draft' };
  tbody.innerHTML = invoices.map(inv => `
    <tr>
      <td><input type="checkbox"></td>
      <td><span class="text-mono">${inv.id}</span></td>
      <td class="td-muted">${inv.po}</td>
      <td><strong>${inv.vendor}</strong></td>
      <td style="font-weight:600">${inv.amount}</td>
      <td class="td-muted">${inv.due}</td>
      <td><span class="badge badge-${sc[inv.status]||'pending'}">${inv.status}</span></td>
      <td>
        <div style="display:flex;gap:6px">
          <button class="btn btn-ghost btn-sm" onclick="openInvoiceModal()"><i class="fas fa-eye"></i></button>
          <button class="btn btn-secondary btn-sm" onclick="openInvoiceModal()"><i class="fas fa-print"></i></button>
          <button class="btn btn-primary btn-sm" onclick="openInvoiceModal();setTimeout(sendInvoiceEmail,300)"><i class="fas fa-envelope"></i></button>
        </div>
      </td>
    </tr>`).join('');
}

function updateInvoicePreview() {
  const el = document.getElementById('invoice-preview');
  if (!el) return;
  const vendor = document.getElementById('inv-vendor')?.value || 'TechMart Solutions';
  const date = document.getElementById('inv-date')?.value || '2024-12-18';
  const due = document.getElementById('inv-due')?.value || '2025-01-17';
  const po = document.getElementById('inv-po')?.value || 'PO-2024-048';
  const gstRate = parseFloat(document.getElementById('inv-gst')?.value || 18);
  const disc = parseFloat(document.getElementById('inv-disc')?.value || 0);
  const notes = document.getElementById('inv-notes')?.value || '';
  const subtotal = 662000;
  const discAmt = subtotal * (disc/100);
  const taxable = subtotal - discAmt;
  const gstAmt = taxable * (gstRate/100);
  const total = taxable + gstAmt;
  const fmt = n => '₹' + Math.round(n).toLocaleString('en-IN');
  el.innerHTML = `
    <div class="invoice-header">
      <div>
        <div class="invoice-logo">Procure<span>Flow</span></div>
        <div style="font-size:12px;color:var(--text3);margin-top:6px">Procurement Dept.<br>42, Business Park, Ahmedabad – 380 015<br>GSTIN: 24AABCP7890S1ZX</div>
      </div>
      <div class="invoice-meta">
        <h2>INVOICE</h2>
        <p class="invoice-number">INV-2024-043</p>
        <p style="margin-top:6px;font-size:12px;color:var(--text3)">Date: ${date}<br>Due: ${due}<br>PO Ref: ${po}</p>
        <span class="badge badge-pending" style="margin-top:8px;display:inline-flex">Pending Payment</span>
      </div>
    </div>
    <div class="invoice-parties">
      <div class="invoice-party"><label>Bill From</label><h4>ProcureFlow Enterprises</h4><p>42, Business Park, Ahmedabad – 380 015<br>Tel: +91 79 4020 1234<br>procurement@procureflow.com</p></div>
      <div class="invoice-party"><label>Bill To</label><h4>${vendor}</h4><p>B-204, Tech Park, BKC, Mumbai – 400 051<br>Tel: +91 98765 43210<br>GSTIN: 27AABCT1234M1ZB</p></div>
    </div>
    <table class="invoice-table">
      <thead><tr><th>#</th><th>Description</th><th style="text-align:center">Qty</th><th style="text-align:right">Rate (₹)</th><th style="text-align:right">Total (₹)</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Laptop 15″ Core i7 16GB RAM 512GB SSD</td><td style="text-align:center">10</td><td style="text-align:right">65,000</td><td style="text-align:right">6,50,000</td></tr>
        <tr><td>2</td><td>Wireless Mouse (Ergonomic)</td><td style="text-align:center">10</td><td style="text-align:right">1,200</td><td style="text-align:right">12,000</td></tr>
      </tbody>
    </table>
    <div style="max-width:280px;margin-left:auto">
      <div class="invoice-total-row"><span>Subtotal</span><span>${fmt(subtotal)}</span></div>
      ${disc > 0 ? `<div class="invoice-total-row"><span>Discount (${disc}%)</span><span style="color:var(--success)">−${fmt(discAmt)}</span></div>` : ''}
      <div class="invoice-total-row"><span>CGST (${gstRate/2}%)</span><span>${fmt(gstAmt/2)}</span></div>
      <div class="invoice-total-row"><span>SGST (${gstRate/2}%)</span><span>${fmt(gstAmt/2)}</span></div>
      <div class="invoice-total-final"><span>Total Due</span><span>${fmt(total)}</span></div>
    </div>
    <div style="margin-top:24px;padding-top:20px;border-top:1px solid var(--border-light)">
      <div style="font-size:12px;color:var(--text3);margin-bottom:8px"><strong style="color:var(--text)">Notes:</strong> ${notes}</div>
      <div style="font-size:11px;color:var(--text3)">Bank: HDFC Bank | A/C: 001234567890 | IFSC: HDFC0001234</div>
    </div>
    <div style="margin-top:16px;background:var(--bg2);border-radius:var(--radius);padding:12px;text-align:center;font-size:11px;color:var(--text3)">
      This is a computer-generated invoice. No signature required.
    </div>`;
}

function printInvoice() {
  const content = document.getElementById('invoice-preview').innerHTML;
  document.getElementById('print-area').innerHTML = `<style>body{font-family:'DM Sans',sans-serif}${document.querySelector('style').textContent}</style>` + content;
  window.print();
}

function downloadInvoice() { showToast('Invoice PDF downloaded!', 'success'); }
function sendInvoiceEmail() { closeModal('invoice-modal'); openModal('email-modal'); }
function confirmSendEmail() { closeModal('email-modal'); showToast('Invoice sent to accounts@techmartsolutions.com', 'success'); }
function submitQuotation() { closeModal('quotation-modal'); showToast('Quotation submitted successfully!', 'success'); }

// ============================================================
// ACTIVITY LOGS
// ============================================================
function renderActivityLogs() {
  const el = document.getElementById('activity-log-list');
  if (!el) return;
  el.innerHTML = activityLogs.map(a => `
    <div class="log-item">
      <div class="log-icon" style="background:${a.color};color:${a.iconColor}"><i class="${a.icon}"></i></div>
      <div class="log-content"><strong>${a.text}</strong><p>${a.desc}</p></div>
      <div class="log-time">${a.time}</div>
    </div>`).join('');
}

// ============================================================
// REPORTS
// ============================================================
function renderReports() {
  const el = document.getElementById('report-chart');
  if (el) {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const vals = [12,18,14,22,19,28,16,24,30,22,28,35];
    const max = Math.max(...vals);
    el.innerHTML = months.map((m,i) => `<div class="chart-bar-wrap"><div class="chart-bar-val">${vals[i]}L</div><div class="chart-bar" style="height:${Math.round((vals[i]/max)*130)}px;background:${i===11?'var(--primary)':'var(--primary-light)'};opacity:${i===11?1:0.55}"></div><div class="chart-bar-label">${m}</div></div>`).join('');
  }
  const cats = [
    { name: 'IT & Technology', pct: 42, color: 'var(--primary)' },
    { name: 'Office Supplies', pct: 22, color: 'var(--success)' },
    { name: 'Software', pct: 18, color: '#7B1FA2' },
    { name: 'Logistics', pct: 11, color: 'var(--accent)' },
    { name: 'Furniture', pct: 7, color: 'var(--danger)' },
  ];
  const catEl = document.getElementById('category-chart');
  if (catEl) {
    catEl.innerHTML = cats.map(c => `<div style="margin-bottom:12px"><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px"><span style="color:var(--text2)">${c.name}</span><span style="font-weight:600;color:var(--text)">${c.pct}%</span></div><div class="progress-bar"><div class="progress-fill" style="width:${c.pct}%;background:${c.color}"></div></div></div>`).join('');
  }
  const perfEl = document.getElementById('vendor-performance');
  if (perfEl) {
    const vp = [
      { name: 'TechMart Solutions', delivery: 96, quality: 98, score: 4.8 },
      { name: 'Global Office Co.', delivery: 90, quality: 92, score: 4.6 },
      { name: 'CloudSoft Solutions', delivery: 88, quality: 95, score: 4.5 },
      { name: 'Rapid Logistics Ltd', delivery: 82, quality: 86, score: 4.3 },
    ];
    perfEl.innerHTML = vp.map(v => `<div style="margin-bottom:14px;padding-bottom:14px;border-bottom:1px solid var(--border-light)"><div style="display:flex;justify-content:space-between;margin-bottom:8px"><span style="font-size:13px;font-weight:500">${v.name}</span><span style="font-size:13px;color:var(--accent);font-weight:600">★ ${v.score}</span></div><div style="margin-bottom:4px"><div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text3);margin-bottom:3px"><span>On-time Delivery</span><span>${v.delivery}%</span></div><div class="progress-bar"><div class="progress-fill" style="width:${v.delivery}%;background:var(--primary)"></div></div></div><div><div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text3);margin-bottom:3px"><span>Quality Score</span><span>${v.quality}%</span></div><div class="progress-bar"><div class="progress-fill" style="width:${v.quality}%;background:var(--success)"></div></div></div></div>`).join('');
  }
}

// ============================================================
// NOTIFICATIONS
// ============================================================
function toggleNotif(btn) { document.getElementById('notif-panel').classList.toggle('open'); }
document.addEventListener('click', function(e) { const panel = document.getElementById('notif-panel'); if (panel && !panel.closest && !e.target.closest('#notif-panel') && !e.target.closest('.icon-btn')) panel.classList.remove('open'); });

// ============================================================
// TOAST
// ============================================================
function showToast(msg, type='info') {
  const t = document.getElementById('toast');
  t.className = `toast ${type}`;
  const icons = { success:'fas fa-check-circle', error:'fas fa-times-circle', info:'fas fa-info-circle' };
  t.innerHTML = `<i class="${icons[type]||icons.info}"></i> ${msg}`;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

// ============================================================
// QUOTATION TOTAL CALC
// ============================================================
function calcQuoteTotal(input) {
  const qty = 10;
  const total = (parseFloat(input.value)||0) * qty;
  const td = input.closest('tr').querySelector('.q-total');
  if (td) td.textContent = '₹' + total.toLocaleString('en-IN');
}

// ============================================================
// CLOSE MODAL ON OVERLAY CLICK
// ============================================================
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) { if (e.target === this) this.classList.remove('open'); });
});

// ============================================================
// INIT
// ============================================================
// Pre-fill RFQ deadline
const today = new Date(); today.setDate(today.getDate()+14);
const rfqDeadline = document.getElementById('rfq-deadline-input');
if (rfqDeadline) rfqDeadline.value = today.toISOString().split('T')[0];
async function checkBackend() {

    const status = document.getElementById("backend-status");

    console.log("Script Loaded");

    try {

        const response = await fetch("http://localhost:5000");

        const text = await response.text();

        console.log(text);

        if(text.includes("Backend Working")){

            status.innerHTML = "🟢 Backend Connected";
            status.style.color = "green";

        } else {

            status.innerHTML = "🔴 Backend Error";
            status.style.color = "red";
        }

    } catch(err){

        console.log(err);

        status.innerHTML = "🔴 Backend Offline";
        status.style.color = "red";
    }
}

window.onload = checkBackend;