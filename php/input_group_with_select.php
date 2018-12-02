              <div class="form-group row required">
                <label class="col-sm-2 col-form-label" for="input-recurring_price">{{ entry_recurring_price }}</label>
                <div class="col-sm-10">
                  <div class="input-group ">
                    <input type="text" name="recurring_price" value="{{ recurring_price }}" placeholder="{{ entry_recurring_price }}" id="input-recurring_price" class="form-control"/>
                    <span class="input-group-select">
                    <select id="DrCr" name="DrCr" class="form-control">
                      <option selected="selected" value="1">Percent</option>
                      <option value="2">Fixed</option>
                    </select></span>
                  </div>
                  {% if error_recurring_price %}
                    <div class="invalid-tooltip">{{ error_recurring_price }}</div>
                  {% endif %}
                </div>
              </div>